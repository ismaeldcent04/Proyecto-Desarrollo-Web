using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Front_end.DTO;
using Front_end.Helpers;
using Front_end.Models;

namespace Front_end.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class TweetController : ControllerBase
    {
        public readonly TwittercloneContext _TwittercloneContext;
        private readonly JwtService _jwtService;

        public TweetController(TwittercloneContext _twittercloneContext, JwtService jwtService)
        {
            _TwittercloneContext = _twittercloneContext;
            _jwtService = jwtService;
        }

        [HttpGet]
        [Route("MostrarTweets")]
        public async Task<IActionResult> MostrarTweet()
        {
            List<Tweet> tweets = new List<Tweet>();
            try
            {
                tweets = await _TwittercloneContext.Tweets.Include(u=>u.IdUsuarioNavigation).Where(e => e.Estado == true).ToListAsync();
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok", response = tweets });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = tweets });
            }
        }
        [HttpGet]
        [Route("ObtenerTweet/{idTweet:long}")]
        public async Task<IActionResult> ObtenerTweet(long idTweet)
        {
            Tweet oTweet = await _TwittercloneContext.Tweets.FindAsync(idTweet);

            if(oTweet == null)
            {
                return BadRequest("Tweet no encontrado");
            }

            try
            {
                oTweet = _TwittercloneContext.Tweets.Include(l=>l.Likes).Include(c=>c.Comentarios).Include(t=>t.IdTipoNavigation).Where(u=>u.IdTweet == idTweet).FirstOrDefault();
                return StatusCode(StatusCodes.Status200OK,new { mensake = "ok", response = oTweet });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = oTweet });
                
            }
        }

        [HttpPost]
        [Route("RegistrarTweetTexto")]
        public IActionResult RegistrarTweetTexto([FromBody]TweetsEntity oTweet)
        {
            long IdUsuario = long.Parse(_jwtService.VerificarToken(Request.Cookies["jwt"]).Issuer);
            try
            {
                _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Solo_Descripcion] {oTweet.Descripción}, {IdUsuario}");
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPost]
        [Route("RegistrarTweetImagen")]
        public IActionResult RegistrarTweetImagen([FromBody] TweetsEntity oTweet)
        {

            long IdUsuario = long.Parse(_jwtService.VerificarToken(Request.Cookies["jwt"]).Issuer);

            try
            {
                oTweet.Imagen1 = oTweet.Imagen1 is null ? "" : oTweet.Imagen1;
                oTweet.Imagen2 = oTweet.Imagen2 is null ? "" : oTweet.Imagen2;
                oTweet.Imagen3 = oTweet.Imagen3 is null ? "" : oTweet.Imagen3;
                oTweet.Imagen4 = oTweet.Imagen4 is null ? "" : oTweet.Imagen4;
                if (oTweet.Descripción == string.Empty || oTweet.Descripción == "string" || oTweet.Descripción == "")
                {
                    _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Solo_Imagenes] {IdUsuario}, {oTweet.Imagen1}, {oTweet.Imagen2}, {oTweet.Imagen3}, {oTweet.Imagen4}");
                }
                else
                {
                    _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Imagen_y_texto] {oTweet.Descripción}, {oTweet.IdUsuario}, {oTweet.Imagen1}, {oTweet.Imagen2}, {oTweet.Imagen3}, {oTweet.Imagen4}");
                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPost]
        [Route("RegistrarTweetGif")]
        public IActionResult RegistrarTweetGif([FromBody] TweetsEntity oTweet)
        {
            try
            {
                if (oTweet.Descripción == string.Empty || oTweet.Descripción == "string" || oTweet.Descripción == "")
                {
                    _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Solo_Gif] {oTweet.IdUsuario}, {oTweet.Gif}");
                }
                else
                {
                    _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Gif_y_Texto] {oTweet.Descripción},{oTweet.IdUsuario}, {oTweet.Gif}");
                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPost]
        [Route("RegistrarTweetVideo")]
        public IActionResult RegistrarTweetVideo([FromBody] TweetsEntity oTweet)
        {
            try
            {
                if (oTweet.Descripción == string.Empty || oTweet.Descripción == "string" || oTweet.Descripción == "")
                {
                    _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Solo_Video] {oTweet.IdUsuario}, {oTweet.Video}");
                }
                else
                {
                    _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Tweet_Video_y_Texto] {oTweet.Descripción}, {oTweet.IdUsuario}, {oTweet.Video}");
                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }


    }
}

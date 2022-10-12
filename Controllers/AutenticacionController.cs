using Front_end.DTO;
using Front_end.Helpers;
using Front_end.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Front_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutenticacionController : ControllerBase
    {
        public readonly TwittercloneContext _TwittercloneContext;
        private JwtService _jwtService;

        public AutenticacionController(TwittercloneContext _twittercloneContext, JwtService jwt)
        {
            _TwittercloneContext = _twittercloneContext;
            _jwtService = jwt;
        }
        [HttpPost]
        [Route("RegistrarUsuario")]
        public IActionResult RegistrarUsuarios([FromBody] UsuarioEntity usuario)
        {
            try
            {

                var nombreUsuario = "@" + usuario.NombreUsuario;
                _TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Crear_Usuario] {nombreUsuario}, {usuario.NombreCompleto},  {usuario.EmailAddress}, {usuario.Contraseña}, {usuario.FechaNacimiento}");
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] Authenticacion request)
        {
            var  user =  _TwittercloneContext.Usuarios.FirstOrDefault(u => u.NombreUsuario == request.NombreUsuario && u.Contraseña == request.Contraseña);
            if (user == null) return BadRequest(new { mensaje = "Credenciales incorrectas" });
            var jwt = _jwtService.GenerarToken(user.IdUsuario);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });
            return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
        }
        [HttpGet]
        [Route("ObtenerUsuario")]
        public IActionResult Usuario()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.VerificarToken(jwt);

                long IdUsuario = long.Parse(token.Issuer);

                var oUsuario = _TwittercloneContext.Usuarios.Include(t => t.Tweets).Include(l => l.Likes).Include(c => c.Comentarios).FirstOrDefault(u => u.IdUsuario == IdUsuario);

                return Ok(oUsuario);
            }
            catch (Exception e)
            {
                return Unauthorized();
            }

        }

        [HttpPost]
        [Route("Logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
        }

        [HttpPost]
        public IActionResult Prueba()
        {
            return Ok("funca");
        }

    }

}

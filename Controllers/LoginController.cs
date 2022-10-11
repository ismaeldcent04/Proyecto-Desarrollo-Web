using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Front_end.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Front_end.DTO;
using Front_end.Helpers;
using Microsoft.EntityFrameworkCore;

namespace Front_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public readonly TwittercloneContext _TwittercloneContext;
        private JwtService _jwtService;

        public LoginController(TwittercloneContext _twittercloneContext, JwtService jwt)
        {
            _TwittercloneContext = _twittercloneContext;
            _jwtService = jwt;
        }
        [HttpPost]
        [Route("RegistrarUsuario")]
        public async  Task<IActionResult> RegistrarUsuarios([FromBody] UsuarioEntity usuario)
        {
            try
            {

                var nombreUsuario = "@" + usuario.NombreUsuario;
                await _TwittercloneContext.Database.ExecuteSqlInterpolatedAsync($"[dbo].[sp_Crear_Usuario] {nombreUsuario}, {usuario.NombreCompleto},  {usuario.EmailAddress}, {usuario.Contraseña}, {usuario.FechaNacimiento}");
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }
        [HttpPost]
        [Route("IniciarSesion")]
        public async Task<IActionResult> IniciarSesion([FromBody] Authenticacion request)
        {
            var user = await _TwittercloneContext.Usuarios.FirstOrDefaultAsync(u => u.NombreUsuario == request.NombreUsuario && u.Contraseña == request.Contraseña);
            if (user == null) return BadRequest(new { mensaje = "Credenciales incorrectas" });
            var jwt = _jwtService.GenerarToken(user.IdUsuario);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true,
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
    }
}

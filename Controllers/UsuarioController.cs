using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Front_end.Models;
using Front_end.DTO;
namespace Front_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly TwittercloneContext _twittercloneContext;

        public UsuarioController(TwittercloneContext twittercloneContext)
        {
            _twittercloneContext = twittercloneContext;
        }

        [HttpGet]
        [Route("ListarUsuarios")]
        public async Task<IActionResult> ListaUsuarios()
        {
            List<Usuario> usuarios = await _twittercloneContext.Usuarios.OrderByDescending(u => u.IdUsuario).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, usuarios); 
        }


        public async Task<IActionResult> EditarPerfil([FromBody] UsuarioEntity usuario)
        {
            Usuario oUsuario = _twittercloneContext.Usuarios.Find(usuario.id);

            if (oUsuario == null)
            {
                return BadRequest("Usuario no encontrado");
            }

            try
            {
                oUsuario.NombreUsuario = usuario.NombreUsuario is null ? oUsuario.NombreUsuario : usuario.NombreUsuario;
                oUsuario.Contraseña = usuario.Contraseña is null ? oUsuario.Contraseña : usuario.Contraseña;
                oUsuario.PhotoPerfil = usuario.PhotoPerfil is null ? oUsuario.PhotoPerfil : usuario.PhotoPerfil;
                oUsuario.Biografia = usuario.Biografia is null ? oUsuario.Biografia : usuario.Biografia;
                oUsuario.Location = usuario.Location is null ? oUsuario.Location : usuario.Location;
                oUsuario.Website = usuario.Website is null ? oUsuario.Website : usuario.Website;
                _twittercloneContext.Usuarios.Update(oUsuario);
                await _twittercloneContext.SaveChangesAsync();
                //_TwittercloneContext.Database.ExecuteSqlInterpolated($"[dbo].[sp_Editar_Usuario] {usuario.id}, {usuario.NombreUsuario}, {usuario.EmailAddress}, {usuario.PhotoPerfil}, {usuario.Biografia}, {usuario.Location}, {usuario.Website}");
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpPut]
        [Route("CambiarContraseña")]
        public async Task<IActionResult> CambiarContraseñar([FromBody] CambiarContraseñaEntity cambiarContraseña)
        {
            Usuario oUsuario = _twittercloneContext.Usuarios.Find(cambiarContraseña.Id);
            if (oUsuario == null)
                return BadRequest("Usuario no encontrado");
            try
            {

                if (cambiarContraseña.ContraseñaAnterior == oUsuario.Contraseña)
                {
                    if (cambiarContraseña.NuevaContraseña == cambiarContraseña.ConfirmarContraseña)
                    {
                        await _twittercloneContext.Database.ExecuteSqlInterpolatedAsync($"[dbo].[sp_Cambiar_Contraseña] {oUsuario.IdUsuario}, {cambiarContraseña.NuevaContraseña}");
                        return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
                    }
                    else
                    {
                        return StatusCode(StatusCodes.Status200OK, new { mensaje = "Las contraseñas no coinciden" });
                    }
                }
                else
                {
                    return StatusCode(StatusCodes.Status200OK, new { mensaje = "Las contraseñas anterior no coinciden con la insertada" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }

        [HttpDelete]
        [Route("EliminarPerfil")]
        public async Task<IActionResult> EliminarPerfil(long idUsuario)
        {
            Usuario oUsuario = _twittercloneContext.Usuarios.Find(idUsuario);

            if (oUsuario == null)
            {
                return BadRequest("Usuario no encontrado");
            }

            try
            {
                await _twittercloneContext.Database.ExecuteSqlInterpolatedAsync($"[dbo].[sp_Eliminar_Usuario] {idUsuario}, 0 ");
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message });
            }
        }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Front_end.DTO
{
    public class UsuarioEntity
    {
        public string id { get; set; }

        [Column("Nombre de usuario")]
        public string NombreUsuario { get; set; }
        [Column("Nombre completo")]
        public string NombreCompleto { get; set; }
        [Column("Email")]
        public string EmailAddress { get; set; }
        [Column("Contraseña")]
        public string Contraseña { get; set; }
        [Column("Fecha de nacimiento")]
        public DateTime FechaNacimiento { get; set; }
        [Column("PhotoPerfil")]
        public string PhotoPerfil { get; set; }
        [Column("Biografia")]
        public string Biografia { get; set; }
        [Column("Location")]
        public string Location { get; set; }

        [Column("Website")]
        public string Website { get; set; }

    }
}

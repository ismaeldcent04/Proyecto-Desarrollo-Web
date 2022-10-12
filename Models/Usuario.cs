using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Comentarios = new HashSet<Comentario>();
            FollowerIdUsuarioNavigations = new HashSet<Follower>();
            Likes = new HashSet<Like>();
            Notificaciones = new HashSet<Notificacione>();
            SeleccionOpcionEncuesta = new HashSet<SeleccionOpcionEncuestum>();
            Tweets = new HashSet<Tweet>();
        }

        public long IdUsuario { get; set; }
        public string NombreUsuario { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Contraseña { get; set; } = null!;
        public DateTime FechaCreacion { get; set; }
        public string? PhotoPerfil { get; set; }
        public bool? Estado { get; set; }
        public string? Biografia { get; set; }
        public string? Location { get; set; }
        public string? Website { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public int? Followers { get; set; }
        public int? Following { get; set; }

        public virtual Follower? FollowerIdFollowerNavigation { get; set; }
        public virtual ICollection<Comentario> Comentarios { get; set; }
        public virtual ICollection<Follower> FollowerIdUsuarioNavigations { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
        public virtual ICollection<Notificacione> Notificaciones { get; set; }
        public virtual ICollection<SeleccionOpcionEncuestum> SeleccionOpcionEncuesta { get; set; }
        public virtual ICollection<Tweet> Tweets { get; set; }
    }
}

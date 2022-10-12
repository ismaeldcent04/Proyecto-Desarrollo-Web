using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class Tweet
    {
        public Tweet()
        {
            Comentarios = new HashSet<Comentario>();
            InverseReTweet = new HashSet<Tweet>();
            Likes = new HashSet<Like>();
            Notificaciones = new HashSet<Notificacione>();
            OpcionesEncuesta = new HashSet<OpcionesEncuestum>();
            SeleccionOpcionEncuesta = new HashSet<SeleccionOpcionEncuestum>();
        }

        public long IdTweet { get; set; }
        public string? Descripción { get; set; }
        public DateTime FechaCreacion { get; set; }
        public long IdUsuario { get; set; }
        public long? ReTweetId { get; set; }
        public string? Imagen1 { get; set; }
        public string? Imagen2 { get; set; }
        public string? Imagen3 { get; set; }
        public string? Imagen4 { get; set; }
        public string? Gif { get; set; }
        public string? Video { get; set; }
        public DateTime? FechaLimiteEncuesta { get; set; }
        public int IdTipo { get; set; }
        public bool? Estado { get; set; }
        public bool Bookmark { get; set; }

        public virtual TipoTweet IdTipoNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
        public virtual Tweet? ReTweet { get; set; }
        public virtual ICollection<Comentario> Comentarios { get; set; }
        public virtual ICollection<Tweet> InverseReTweet { get; set; }
        public virtual ICollection<Like> Likes { get; set; }
        public virtual ICollection<Notificacione> Notificaciones { get; set; }
        public virtual ICollection<OpcionesEncuestum> OpcionesEncuesta { get; set; }
        public virtual ICollection<SeleccionOpcionEncuestum> SeleccionOpcionEncuesta { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class Like
    {
        public long IdLike { get; set; }
        public long IdTweet { get; set; }
        public long IdUsuario { get; set; }
        public DateTime FechaCreacion { get; set; }
        public bool? Estado { get; set; }

        public virtual Tweet IdTweetNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}

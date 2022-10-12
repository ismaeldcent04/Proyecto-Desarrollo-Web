using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class SeleccionOpcionEncuestum
    {
        public long IdSeleccionOpcionEncuesta { get; set; }
        public long IdUsuario { get; set; }
        public long IdTweet { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int IdOpcionesEncuesta { get; set; }

        public virtual OpcionesEncuestum IdOpcionesEncuestaNavigation { get; set; } = null!;
        public virtual Tweet IdTweetNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}

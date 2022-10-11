using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class OpcionesEncuestum
    {
        public OpcionesEncuestum()
        {
            SeleccionOpcionEncuesta = new HashSet<SeleccionOpcionEncuestum>();
        }

        public int IdOpcionesEncuesta { get; set; }
        public long IdTweet { get; set; }
        public int NumeroOpcion { get; set; }
        public string Descripción { get; set; } = null!;

        public virtual Tweet IdTweetNavigation { get; set; } = null!;
        public virtual ICollection<SeleccionOpcionEncuestum> SeleccionOpcionEncuesta { get; set; }
    }
}

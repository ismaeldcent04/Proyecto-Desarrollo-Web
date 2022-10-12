using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class TipoNotificacion
    {
        public TipoNotificacion()
        {
            Notificaciones = new HashSet<Notificacione>();
        }

        public int IdTipoNotificacion { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Notificacione> Notificaciones { get; set; }
    }
}

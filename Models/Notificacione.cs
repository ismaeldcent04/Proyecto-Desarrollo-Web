using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class Notificacione
    {
        public long IdNotification { get; set; }
        public long IdUser { get; set; }
        public long IdTweet { get; set; }
        public string Descripción { get; set; } = null!;
        public int IdTipoNotificacion { get; set; }

        public virtual TipoNotificacion IdTipoNotificacionNavigation { get; set; } = null!;
        public virtual Tweet IdTweetNavigation { get; set; } = null!;
        public virtual Usuario IdUserNavigation { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class Follower
    {
        public long IdFollower { get; set; }
        public long? IdUsuario { get; set; }
        public bool? Estado { get; set; }

        public virtual Usuario IdFollowerNavigation { get; set; } = null!;
        public virtual Usuario? IdUsuarioNavigation { get; set; }
    }
}

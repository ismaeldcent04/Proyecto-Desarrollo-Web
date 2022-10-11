using System;
using System.Collections.Generic;

namespace Front_end.Models
{
    public partial class TipoTweet
    {
        public TipoTweet()
        {
            Tweets = new HashSet<Tweet>();
        }

        public int IdTipo { get; set; }
        public string Descripcion { get; set; } = null!;

        public virtual ICollection<Tweet> Tweets { get; set; }
    }
}

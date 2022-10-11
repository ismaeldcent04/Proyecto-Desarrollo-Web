namespace Front_end.DTO
{
    public class TweetsEntity
    {
        public long IdTweet { get; set; }
        public string Descripción { get; set; }
        public DateTime FechaCreacion { get; set; }
        public long IdUsuario { get; set; }
        public long? ReTweetId { get; set; }
        public string Imagen1 { get; set; }
        public string Imagen2 { get; set; }
        public string Imagen3 { get; set; }
        public string Imagen4 { get; set; }
        public string Gif { get; set; }
        public string Video { get; set; }
        public DateTime? FechaLimiteEncuesta { get; set; }
        public UsuarioEntity oUsuario { get; set; }
        public int IdTipo { get; set; }
        public bool? Estado { get; set; }
    }
}

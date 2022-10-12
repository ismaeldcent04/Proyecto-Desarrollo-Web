namespace Front_end.DTO
{
    public class CambiarContraseñaEntity
    {
        public long Id { get; set; }
        public string ContraseñaAnterior { get; set; }
        public string NuevaContraseña { get; set; }
        public string ConfirmarContraseña { get; set; }


    }
}

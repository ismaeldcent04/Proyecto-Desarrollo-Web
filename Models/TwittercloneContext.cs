using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Front_end.Models
{
    public partial class TwittercloneContext : DbContext
    {
        public TwittercloneContext()
        {
        }

        public TwittercloneContext(DbContextOptions<TwittercloneContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comentario> Comentarios { get; set; } = null!;
        public virtual DbSet<Follower> Followers { get; set; } = null!;
        public virtual DbSet<Like> Likes { get; set; } = null!;
        public virtual DbSet<Notificacione> Notificaciones { get; set; } = null!;
        public virtual DbSet<OpcionesEncuestum> OpcionesEncuesta { get; set; } = null!;
        public virtual DbSet<SeleccionOpcionEncuestum> SeleccionOpcionEncuesta { get; set; } = null!;
        public virtual DbSet<TipoNotificacion> TipoNotificacions { get; set; } = null!;
        public virtual DbSet<TipoTweet> TipoTweets { get; set; } = null!;
        public virtual DbSet<Tweet> Tweets { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Twitterclone;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comentario>(entity =>
            {
                entity.HasKey(e => e.IdComentario);

                entity.Property(e => e.IdComentario).ValueGeneratedNever();

                entity.Property(e => e.Comentario1)
                    .HasMaxLength(50)
                    .HasColumnName("Comentario");

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.IdTweetNavigation)
                    .WithMany(p => p.Comentarios)
                    .HasForeignKey(d => d.IdTweet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Comentarios_Tweet");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Comentarios)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Comentarios_Usuarios");
            });

            modelBuilder.Entity<Follower>(entity =>
            {
                entity.HasKey(e => e.IdFollower);

                entity.ToTable("followers");

                entity.Property(e => e.IdFollower).ValueGeneratedNever();

                entity.Property(e => e.Estado).HasColumnName("estado");

                entity.HasOne(d => d.IdFollowerNavigation)
                    .WithOne(p => p.FollowerIdFollowerNavigation)
                    .HasForeignKey<Follower>(d => d.IdFollower)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_followers_Usuarios1");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.FollowerIdUsuarioNavigations)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_followers_Usuarios");
            });

            modelBuilder.Entity<Like>(entity =>
            {
                entity.HasKey(e => e.IdLike);

                entity.ToTable("Like");

                entity.Property(e => e.IdLike).ValueGeneratedNever();

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.FechaCreacion).HasColumnType("datetime");

                entity.HasOne(d => d.IdTweetNavigation)
                    .WithMany(p => p.Likes)
                    .HasForeignKey(d => d.IdTweet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Like_Tweet");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Likes)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Like_Usuarios");
            });

            modelBuilder.Entity<Notificacione>(entity =>
            {
                entity.HasKey(e => e.IdNotification);

                entity.Property(e => e.Descripción).HasMaxLength(50);

                entity.HasOne(d => d.IdTipoNotificacionNavigation)
                    .WithMany(p => p.Notificaciones)
                    .HasForeignKey(d => d.IdTipoNotificacion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Notificaciones_TipoNotificacion");

                entity.HasOne(d => d.IdTweetNavigation)
                    .WithMany(p => p.Notificaciones)
                    .HasForeignKey(d => d.IdTweet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Notificaciones_Tweet");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Notificaciones)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Notificaciones_Usuarios");
            });

            modelBuilder.Entity<OpcionesEncuestum>(entity =>
            {
                entity.HasKey(e => e.IdOpcionesEncuesta);

                entity.Property(e => e.Descripción)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTweetNavigation)
                    .WithMany(p => p.OpcionesEncuesta)
                    .HasForeignKey(d => d.IdTweet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OpcionesEncuesta_Tweet");
            });

            modelBuilder.Entity<SeleccionOpcionEncuestum>(entity =>
            {
                entity.HasKey(e => e.IdSeleccionOpcionEncuesta);

                entity.Property(e => e.IdSeleccionOpcionEncuesta).ValueGeneratedNever();

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.IdOpcionesEncuestaNavigation)
                    .WithMany(p => p.SeleccionOpcionEncuesta)
                    .HasForeignKey(d => d.IdOpcionesEncuesta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SeleccionOpcionEncuesta_OpcionesEncuesta");

                entity.HasOne(d => d.IdTweetNavigation)
                    .WithMany(p => p.SeleccionOpcionEncuesta)
                    .HasForeignKey(d => d.IdTweet)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SeleccionOpcionEncuesta_Tweet");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.SeleccionOpcionEncuesta)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SeleccionOpcionEncuesta_Usuarios");
            });

            modelBuilder.Entity<TipoNotificacion>(entity =>
            {
                entity.HasKey(e => e.IdTipoNotificacion);

                entity.ToTable("TipoNotificacion");

                entity.Property(e => e.Descripcion).HasMaxLength(50);
            });

            modelBuilder.Entity<TipoTweet>(entity =>
            {
                entity.HasKey(e => e.IdTipo);

                entity.ToTable("TipoTweet");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tweet>(entity =>
            {
                entity.HasKey(e => e.IdTweet);

                entity.ToTable("Tweet");

                entity.Property(e => e.IdTweet).ValueGeneratedNever();

                entity.Property(e => e.Descripción)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FechaLimiteEncuesta).HasColumnType("datetime");

                entity.Property(e => e.Gif)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Imagen1)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Imagen2)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Imagen3)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Imagen4)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Video)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.Tweets)
                    .HasForeignKey(d => d.IdTipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tweet_TipoTweet");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Tweets)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tweet_Usuarios");

                entity.HasOne(d => d.ReTweet)
                    .WithMany(p => p.InverseReTweet)
                    .HasForeignKey(d => d.ReTweetId)
                    .HasConstraintName("FK_Tweet_Tweet");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.Property(e => e.IdUsuario).ValueGeneratedNever();

                entity.Property(e => e.Biografia)
                    .HasMaxLength(160)
                    .IsUnicode(false);

                entity.Property(e => e.Contraseña).IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Estado)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FechaNacimiento).HasColumnType("date");

                entity.Property(e => e.Followers).HasColumnName("followers");

                entity.Property(e => e.Following).HasColumnName("following");

                entity.Property(e => e.Location)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PhotoPerfil)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .HasMaxLength(70)
                    .IsUnicode(false);
            });

            modelBuilder.HasSequence("increment_IdComentario");

            modelBuilder.HasSequence("increment_IdComentario", "sq");

            modelBuilder.HasSequence("increment_IdLike");

            modelBuilder.HasSequence("increment_IdLike", "sq");

            modelBuilder.HasSequence<int>("increment_IdNotificacion");

            modelBuilder.HasSequence("increment_IdNotificaciones");

            modelBuilder.HasSequence("increment_IdNotificaciones", "sq");

            modelBuilder.HasSequence("increment_IdSeleccionOpcionEncuesta");

            modelBuilder.HasSequence("increment_IdTweet");

            modelBuilder.HasSequence("increment_IdTweet", "sq");

            modelBuilder.HasSequence("increment_IdUsuario");

            modelBuilder.HasSequence("increment_IdUsuario", "sq");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

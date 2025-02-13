package cl.previred.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import cl.previred.desafio.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}

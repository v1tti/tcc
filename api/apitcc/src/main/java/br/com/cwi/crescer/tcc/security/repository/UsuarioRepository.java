package br.com.cwi.crescer.tcc.security.repository;

import br.com.cwi.crescer.tcc.security.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);
}

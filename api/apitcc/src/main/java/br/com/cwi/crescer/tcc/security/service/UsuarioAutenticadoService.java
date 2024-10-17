package br.com.cwi.crescer.tcc.security.service;

import br.com.cwi.crescer.tcc.security.config.UsuarioSecurity;
import br.com.cwi.crescer.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.crescer.tcc.security.domain.Usuario;
import br.com.cwi.crescer.tcc.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import static br.com.cwi.crescer.tcc.security.mapper.UsuarioMapper.toResponse;
import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Service
public class UsuarioAutenticadoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Long getId() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication.getPrincipal() instanceof UsuarioSecurity) {
            return ((UsuarioSecurity) authentication.getPrincipal()).getId();
        }

        return null;
    }

    public Usuario get() {
        Long id = getId();
        Long idUsuario = 6l;


        return usuarioRepository.findById(idUsuario).orElse(null);
        //return usuarioRepository.findById(getId()).orElse(null);
    }

    public UsuarioResponse getResponse() {
        Usuario entity = get();
        return nonNull(entity) ? toResponse(entity) : new UsuarioResponse();
    }
}

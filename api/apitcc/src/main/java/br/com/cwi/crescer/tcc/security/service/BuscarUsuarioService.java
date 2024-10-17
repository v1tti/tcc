package br.com.cwi.crescer.tcc.security.service;

import br.com.cwi.crescer.tcc.security.controller.response.UsuarioResponse;
import br.com.cwi.crescer.tcc.security.domain.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.crescer.tcc.security.mapper.UsuarioMapper.toResponse;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    public UsuarioResponse buscar() {
        Usuario usuarioAutenticado = usuarioAutenticadoService.get();
        return toResponse(usuarioAutenticado);
    }
}

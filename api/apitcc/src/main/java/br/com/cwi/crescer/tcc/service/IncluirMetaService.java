package br.com.cwi.crescer.tcc.service;

import br.com.cwi.crescer.tcc.controller.request.MetasRequest;
import br.com.cwi.crescer.tcc.controller.response.MetasResponse;
import br.com.cwi.crescer.tcc.domain.Metas;
import br.com.cwi.crescer.tcc.mapper.MetasMapper;
import br.com.cwi.crescer.tcc.repository.MetasRepository;
import br.com.cwi.crescer.tcc.security.domain.Usuario;
import br.com.cwi.crescer.tcc.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class IncluirMetaService {


    @Autowired
    private MetasRepository repository;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Transactional
    public MetasResponse incluir(MetasRequest request) {
        Usuario usuarioAutenticado = usuarioAutenticadoService.get();
        Metas metas = MetasMapper.toEntity(request);

        metas.setUsuario(usuarioAutenticado);

        usuarioAutenticado.adicionarMetas(metas);
        repository.save(metas);

        return MetasMapper.toResponse(metas);
    }
}

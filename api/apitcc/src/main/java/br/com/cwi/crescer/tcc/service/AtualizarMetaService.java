package br.com.cwi.crescer.tcc.service;

import br.com.cwi.crescer.tcc.controller.request.MetasRequest;
import br.com.cwi.crescer.tcc.controller.response.MetasResponse;
import br.com.cwi.crescer.tcc.domain.Metas;
import br.com.cwi.crescer.tcc.repository.MetasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.crescer.tcc.mapper.MetasMapper.toResponse;

@Service
public class AtualizarMetaService {

    @Autowired
    MetasRepository metasRepository;

    @Autowired
    BuscarMetaService buscarMetaService;

    @Transactional
    public MetasResponse atualizarMeta(Long metasId, MetasRequest metasRequest) {
        Metas metas = buscarMetaService.porId(metasId);

        metasRepository.save(metas);

        return toResponse(metas);
    }
}

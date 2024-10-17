package br.com.cwi.crescer.tcc.service;

import br.com.cwi.crescer.tcc.domain.Metas;
import br.com.cwi.crescer.tcc.repository.MetasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarMetaService {

    @Autowired
    private MetasRepository metasRepository;

    public Metas porId(Long id){
        return metasRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "meta não encontrada"));
    }
}

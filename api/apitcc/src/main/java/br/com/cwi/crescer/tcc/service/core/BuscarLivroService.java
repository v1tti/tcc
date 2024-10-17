package br.com.cwi.crescer.tcc.service.core;

import br.com.cwi.crescer.tcc.domain.Consumido;
import br.com.cwi.crescer.tcc.repository.ConsumidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarLivroService {

    @Autowired
    private ConsumidoRepository repository;

    public Consumido porId(Long id) {
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "livro não encontrado"));
    }
}

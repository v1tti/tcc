package br.com.cwi.crescer.tcc.service.core;

import br.com.cwi.crescer.tcc.repository.ConsumidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ValidaTituloUnicoService {

    @Autowired
    private ConsumidoRepository repository;

    public void validar(String titulo) {



    }
}

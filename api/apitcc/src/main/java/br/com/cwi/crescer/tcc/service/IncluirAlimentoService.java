package br.com.cwi.crescer.tcc.service;

import br.com.cwi.crescer.tcc.controller.request.AlimentoRequest;
import br.com.cwi.crescer.tcc.domain.Alimento;
import br.com.cwi.crescer.tcc.mapper.AlimentoMapper;
import br.com.cwi.crescer.tcc.repository.AlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class IncluirAlimentoService {

    @Autowired
    private AlimentoRepository alimentoRepository;

    @Transactional
    public void incluirAlimento(AlimentoRequest request) {
        Alimento alimento = AlimentoMapper.toEntity(request);

        alimentoRepository.save(alimento);
    }
}

package br.com.cwi.crescer.tcc.service;

import br.com.cwi.crescer.tcc.controller.request.ConsumidoRequest;
import br.com.cwi.crescer.tcc.domain.Consumido;
import br.com.cwi.crescer.tcc.mapper.ConsumidoMapper;
import br.com.cwi.crescer.tcc.repository.ConsumidoRepository;
import br.com.cwi.crescer.tcc.security.domain.Usuario;
import br.com.cwi.crescer.tcc.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class IncluirConsumido {

    @Autowired
    ConsumidoRepository consumidoRepository;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Transactional
    public void incluirConsumido(ConsumidoRequest request) {
        Usuario usuarioAutenticado = usuarioAutenticadoService.get();

        Consumido consumido = ConsumidoMapper.toEntity(request);

        consumido.setUsuario(usuarioAutenticado);

        usuarioAutenticado.adicionarConsumido(consumido);

        consumidoRepository.save(consumido);
    }
}

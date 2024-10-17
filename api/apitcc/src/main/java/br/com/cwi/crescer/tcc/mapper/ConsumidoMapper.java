package br.com.cwi.crescer.tcc.mapper;

import br.com.cwi.crescer.tcc.controller.request.ConsumidoRequest;
import br.com.cwi.crescer.tcc.domain.Consumido;

public class ConsumidoMapper {

    public static Consumido toEntity(ConsumidoRequest consumidoRequest) {
        Consumido consumido = new Consumido();
        consumido.setNome(consumidoRequest.getNome());
        consumido.setGorduras(consumidoRequest.getGorduras());
        consumido.setCarboidratos(consumidoRequest.getCarboidratos());
        consumido.setProteinas(consumidoRequest.getProteinas());
        consumido.setAcucar(consumidoRequest.getAcucar());
        consumido.setCalorias(consumidoRequest.getCalorias());
        consumido.setDataConsumo(consumidoRequest.getDataConsumo());

        return consumido;
    }
}

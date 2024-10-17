package br.com.cwi.crescer.tcc.mapper;

import br.com.cwi.crescer.tcc.controller.request.MetasRequest;
import br.com.cwi.crescer.tcc.controller.response.MetasResponse;
import br.com.cwi.crescer.tcc.domain.Metas;

public class MetasMapper {

    public static Metas toEntity(MetasRequest request) {
        Metas metas = new Metas();
        metas.setCalorias(request.getCalorias());
        metas.setGorduras(request.getGorduras());
        metas.setObjetivo(request.getObjetivo());
        metas.setCarboidratos(request.getCarboidratos());
        metas.setProteinas(request.getProteinas());
        metas.setGorduras(request.getGorduras());

        return metas;
    }

    public static MetasResponse toResponse(Metas metas) {
        return MetasResponse.builder()
                .id(metas.getId())
                .calorias(metas.getCalorias())
                .gorduras(metas.getGorduras())
                .objetivo(metas.getObjetivo())
                .carboidratos(metas.getCarboidratos())
                .proteinas(metas.getProteinas())
                .build();
    }
}

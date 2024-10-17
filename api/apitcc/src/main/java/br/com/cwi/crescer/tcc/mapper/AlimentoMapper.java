package br.com.cwi.crescer.tcc.mapper;

import br.com.cwi.crescer.tcc.controller.request.AlimentoRequest;
import br.com.cwi.crescer.tcc.domain.Alimento;

public class AlimentoMapper {

    public static Alimento toEntity(AlimentoRequest alimentoRequest) {
        Alimento alimento = new Alimento();
        alimento.setName(alimentoRequest.getName());
        alimento.setCalories(alimentoRequest.getCalories());
        alimento.setFats(alimentoRequest.getFats());
        alimento.setGrams(alimentoRequest.getGrams());
        alimento.setProtein(alimentoRequest.getProtein());
        alimento.setCarbs(alimentoRequest.getCarbs());
        alimento.setSugar(alimentoRequest.getSugar());

        return alimento;
    }
}

package br.com.cwi.crescer.tcc.controller.request;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class AlimentoRequest {
    private String name;
    private BigDecimal grams;
    private BigDecimal calories;
    private BigDecimal protein;
    private BigDecimal carbs;
    private BigDecimal fats;
    private BigDecimal sugar;

}

package br.com.cwi.crescer.tcc.controller.request;

import br.com.cwi.crescer.tcc.domain.Objetivo;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class MetasRequest {
    private BigDecimal carboidratos;
    private BigDecimal proteinas;
    private BigDecimal gorduras;
    private BigDecimal calorias;
    private Objetivo objetivo;
}

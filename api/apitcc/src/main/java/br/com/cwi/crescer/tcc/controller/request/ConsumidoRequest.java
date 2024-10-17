package br.com.cwi.crescer.tcc.controller.request;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class ConsumidoRequest {
    private String nome;

    private LocalDate dataConsumo;

    private BigDecimal carboidratos;

    private BigDecimal proteinas;

    private BigDecimal gorduras;

    private BigDecimal quantidade;

    private BigDecimal calorias;

    private BigDecimal acucar;
}

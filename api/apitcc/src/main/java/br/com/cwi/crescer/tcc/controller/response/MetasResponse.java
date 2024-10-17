package br.com.cwi.crescer.tcc.controller.response;

import br.com.cwi.crescer.tcc.domain.Objetivo;
import lombok.*;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class MetasResponse {
    private Long id;
    private BigDecimal carboidratos;
    private BigDecimal proteinas;
    private BigDecimal gorduras;
    private BigDecimal calorias;
    private Objetivo objetivo;
}

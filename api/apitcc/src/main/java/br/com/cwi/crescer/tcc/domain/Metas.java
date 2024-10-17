package br.com.cwi.crescer.tcc.domain;


import br.com.cwi.crescer.tcc.security.domain.Usuario;
import lombok.*;

import javax.persistence.*;

import java.math.BigDecimal;

import static javax.persistence.GenerationType.IDENTITY;
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id") @ToString(of = "id")
public class Metas {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private BigDecimal carboidratos;

    private BigDecimal proteinas;

    private BigDecimal gorduras;

    private BigDecimal calorias;
    @Enumerated(EnumType.STRING)
    private Objetivo objetivo;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
}

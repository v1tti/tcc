package br.com.cwi.crescer.tcc.domain;

import br.com.cwi.crescer.tcc.security.domain.Usuario;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id") @ToString(of = "id")
public class RestricoesAlimento {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String nome;

    @ManyToOne
    @JoinColumn(name = "alimento_id")
    private Alimento alimento;
}

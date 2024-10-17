package br.com.cwi.crescer.tcc.security.domain;

import br.com.cwi.crescer.tcc.domain.Consumido;
import br.com.cwi.crescer.tcc.domain.Metas;
import br.com.cwi.crescer.tcc.domain.RestricoesUsuario;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
public class Usuario {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    private LocalDate dataNascimento;
    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    private BigDecimal peso;

    @Column(nullable = false)
    private String senha;
    @Enumerated(EnumType.STRING)
    private AtividadeFisica atividadeFisica;

    private BigDecimal altura;

    @Column(nullable = false)
    private boolean ativo;

    @OneToMany(mappedBy = "usuario")
    private List<Metas> metas = new ArrayList<>();

    @OneToMany(mappedBy = "usuario")
    private List<Consumido> consumido = new ArrayList<>();

    @OneToMany(mappedBy = "usuario")
    private List<RestricoesUsuario> restricoesUsuario = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Permissao> permissoes = new ArrayList<>();

    public void adicionarPermissao(Permissao permissao) {
        this.permissoes.add(permissao);
        permissao.setUsuario(this);
    }

    public void adicionarMetas(Metas metas) {
        this.getMetas().add(metas);
        metas.setUsuario(this);
    }

    public void adicionarConsumido(Consumido consumido) {
        this.getConsumido().add(consumido);
        consumido.setUsuario(this);
    }
}

package br.com.cwi.crescer.tcc.security.controller.response;

import br.com.cwi.crescer.tcc.security.domain.AtividadeFisica;
import br.com.cwi.crescer.tcc.security.domain.Sexo;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class UsuarioResponse {

    private Long id;
    private String nome;
    private String email;
    private LocalDate dataNascimento;
    private BigDecimal peso;
    private BigDecimal altura;
    private AtividadeFisica atividadeFisica;
    private Sexo sexo;
}

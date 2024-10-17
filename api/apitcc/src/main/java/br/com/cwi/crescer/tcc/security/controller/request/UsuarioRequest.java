package br.com.cwi.crescer.tcc.security.controller.request;

import br.com.cwi.crescer.tcc.security.domain.AtividadeFisica;
import br.com.cwi.crescer.tcc.security.domain.Sexo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class UsuarioRequest {

    private String nome;

    @Email
    private String email;

    private LocalDate dataNascimento;

    private Sexo sexo;

    private BigDecimal peso;

    private String senha;

    private AtividadeFisica atividadeFisica;

    private BigDecimal altura;


}

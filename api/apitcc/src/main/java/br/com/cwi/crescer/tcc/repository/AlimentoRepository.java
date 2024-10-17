package br.com.cwi.crescer.tcc.repository;

import br.com.cwi.crescer.tcc.domain.Alimento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlimentoRepository extends JpaRepository<Alimento,Long> {
}

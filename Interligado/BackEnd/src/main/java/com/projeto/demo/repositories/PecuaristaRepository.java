package com.projeto.demo.repositories;

import com.projeto.demo.entities.Pecuarista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PecuaristaRepository extends JpaRepository<Pecuarista, Long> {

}

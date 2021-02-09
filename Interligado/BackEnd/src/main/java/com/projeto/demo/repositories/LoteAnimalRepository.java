package com.projeto.demo.repositories;

import com.projeto.demo.entities.LoteAnimal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoteAnimalRepository extends JpaRepository<LoteAnimal, Long> {

}

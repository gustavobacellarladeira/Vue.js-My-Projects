package com.projeto.demo.controller;

import com.projeto.demo.entities.FiltroAnimais;
import com.projeto.demo.entities.LoteAnimal;
import com.projeto.demo.repositories.LoteAnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*" )
@RestController
@RequestMapping(value = "/loteAnimais")
public class LoteAnimalController {

    @Autowired
    LoteAnimalRepository loteAnimalRepository;

    @GetMapping(value = "/listar")
    public ResponseEntity<List<LoteAnimal>> listar() {
        List<LoteAnimal> loteAnimais = loteAnimalRepository.findAll();
        if (loteAnimais.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(loteAnimais);
    }

    @GetMapping(value = "/buscarId/{id}")
    public ResponseEntity<Optional<LoteAnimal>> buscarId(@PathVariable Long id) {
        Optional<LoteAnimal> loteAnimal = loteAnimalRepository.findById(id);
        if (loteAnimal.isPresent()) {
            return ResponseEntity.ok().body(loteAnimal);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping(value = "/cadastrar")
    public LoteAnimal insert(@RequestBody LoteAnimal obj) {

        return loteAnimalRepository.save(obj);
    }

    @DeleteMapping(value = "/deletar")
    public ResponseEntity<String> delete(@Valid @RequestBody LoteAnimal obj) {
        if (!loteAnimalRepository.existsById(obj.getId())) {
            return ResponseEntity.notFound().build();
        }
        loteAnimalRepository.delete(obj);
        return ResponseEntity.ok("LoteAnimal: " + obj.getId() + ": DELETADO");
    }

    @PutMapping(value = "/atualizar")
    public ResponseEntity<LoteAnimal> update(@Valid @RequestBody LoteAnimal obj) {
        if (!loteAnimalRepository.existsById(obj.getId())) {
            return ResponseEntity.notFound().build();
        }
        loteAnimalRepository.save(obj);
        return ResponseEntity.ok(obj);
    }

    @PostMapping(value = "/filtrar")
    ResponseEntity<List<LoteAnimal>> filtrar(@Valid @RequestBody FiltroAnimais obj) {
        List<LoteAnimal> loteAnimals = loteAnimalRepository.findAll();
        List<LoteAnimal> filtro = new ArrayList<>();
        for (LoteAnimal l : loteAnimals) {
            if (
                    (l.getRaca().equals(obj.getRaca()) || l.getRaca().equals(null)) &&
                            (l.getSexo().equals(obj.getSexo()) || l.getSexo().equals(null)) &&
                            (l.getIdade().equals(obj.getIdade()) || l.getIdade().equals(null)) &&
                            (l.getSistemaCriacao().equals(obj.getSistemaCriacao()) || l.getSistemaCriacao().equals(null))
            )
                filtro.add(l);
        }
        return ResponseEntity.ok().body(filtro);


    }

}

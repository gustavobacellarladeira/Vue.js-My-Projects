package com.projeto.demo.controller;

import com.projeto.demo.entities.Login;
import com.projeto.demo.entities.Pecuarista;
import com.projeto.demo.repositories.PecuaristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
@RequestMapping(value = "/pecuarista")
public class PecuaristaController {

    @Autowired
    PecuaristaRepository pecuaristaRepository;

    @GetMapping(value = "/listar")
    public ResponseEntity<List<Pecuarista>> listar(){
        List<Pecuarista> pecuaristas = pecuaristaRepository.findAll();
        if(pecuaristas.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(pecuaristas);
    }

    @GetMapping(value = "/buscarCpf/{cpf}")
    public ResponseEntity<Pecuarista> buscarCpf_cnpj(@PathVariable String cpf){
        List<Pecuarista> perfils = pecuaristaRepository.findAll();
        for (Pecuarista p: perfils) {
            if(p.getCpf().equals(cpf)){
                return ResponseEntity.ok().body(p);
            }
        }
        return ResponseEntity.notFound().build();
    }


    @PostMapping(value = "/cadastrar")
    public ResponseEntity<Pecuarista> cadastrar(@Valid @RequestBody Pecuarista obj){
        List<Pecuarista> perfils = pecuaristaRepository.findAll();
        for (Pecuarista u : perfils) {
            if(u.getCpf().equals(obj.getCpf())){
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
        }
        pecuaristaRepository.save(obj);
        return ResponseEntity.ok(obj);
    }

    @PostMapping(value = "/logar")
    public ResponseEntity<Pecuarista> logar(@Valid @RequestBody Login obj){
        List<Pecuarista> usuarios = pecuaristaRepository.findAll();
        for (Pecuarista u : usuarios) {
            if(u.getEmail().equals(obj.getEmail()) && u.getSenha().equals(obj.getSenha())){
                return ResponseEntity.ok(u);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping(value = "/deletar")
    public ResponseEntity<String> delete(@Valid @RequestBody Pecuarista obj) {
        List<Pecuarista> Perfils = pecuaristaRepository.findAll();
        for (Pecuarista u : Perfils) {
            if (u.getCpf().equals(obj.getCpf())) {
                pecuaristaRepository.delete(obj);
                return ResponseEntity.ok((obj.getNome() + "DELETADO"));
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/atualizar")
    public ResponseEntity<Pecuarista> update(@Valid @RequestBody Pecuarista obj){
        if(!pecuaristaRepository.existsById(obj.getId())){
            return ResponseEntity.notFound().build();
        }
        pecuaristaRepository.save(obj);
        return ResponseEntity.ok(obj);

    }

}

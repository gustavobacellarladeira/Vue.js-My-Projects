package com.projeto.demo.controller;

import com.projeto.demo.entities.Endereco;

import com.projeto.demo.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/endereco")
public class EnderecoController{

    @Autowired
    EnderecoRepository enderecoRepository;

    @GetMapping(value = "/listar")
    public ResponseEntity<List<Endereco>> listar(){
        List<Endereco> enderecos = enderecoRepository.findAll();
        if(enderecos.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(enderecos);
    }

    @GetMapping(value = "/buscarId/{id}")
    public ResponseEntity<Optional<Endereco>>  buscarId(@PathVariable Long id){
        Optional<Endereco> endereco = enderecoRepository.findById(id);
            if(endereco.isPresent()){
                return ResponseEntity.ok().body(endereco);
            }
        return ResponseEntity.notFound().build();
    }


    @PostMapping(value = "/cadastrar")
    public ResponseEntity<Endereco> cadastrar(@Valid @RequestBody Endereco obj){
        List<Endereco> enderecos = enderecoRepository.findAll();
        for (Endereco e : enderecos) {
            if(e.getCidade().equals(obj.getCidade()) && e.getRua().equals(obj.getRua()) && e.getNumero().equals(obj.getNumero())){
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
        }
        enderecoRepository.save(obj);
        return ResponseEntity.ok(obj);
    }



    @DeleteMapping(value = "/deletar")
    public ResponseEntity<String> delete(@Valid @RequestBody Endereco obj) {
        List<Endereco> enderecos = enderecoRepository.findAll();
        for (Endereco u : enderecos) {
            if (u.getId().equals(obj.getId())) {
                enderecoRepository.delete(obj);
                return ResponseEntity.ok((obj.getId() + "DELETADO"));
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/atualizar")
    public ResponseEntity<Endereco> update(@Valid @RequestBody Endereco obj){
        if(!enderecoRepository.existsById(obj.getId())){
            return ResponseEntity.notFound().build();
        }
        enderecoRepository.save(obj);
        return ResponseEntity.ok(obj);

    }
}

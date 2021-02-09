package com.projeto.demo.controller;

import com.projeto.demo.entities.*;
import com.projeto.demo.repositories.FrigorificoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
@RequestMapping(value = "/frigorifico")
public class FrigorificoController {

    @Autowired
    FrigorificoRepository frigorificoRepository;

    @GetMapping(value = "/listar")
    public ResponseEntity<List<Frigorifico>> listar() {
        List<Frigorifico> frigorificos = frigorificoRepository.findAll();
        if (frigorificos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(frigorificos);
    }

    @GetMapping(value = "/buscarCnpj/{licenca}")
    public ResponseEntity<Frigorifico> buscarCnpj(@PathVariable String cnpj) {
        List<Frigorifico> frigorificos = frigorificoRepository.findAll();
        for (Frigorifico f : frigorificos) {
            if (f.getCnpj().equals(cnpj)) {
                return ResponseEntity.ok().body(f);
            }
        }
        return ResponseEntity.notFound().build();
    }


    @PostMapping(value = "/cadastrar")
    public ResponseEntity<Frigorifico> cadastrar(@Valid @RequestBody Frigorifico obj) {
        List<Frigorifico> frigorificos = frigorificoRepository.findAll();
        for (Frigorifico f : frigorificos) {
            if (f.getLicenca().equals(obj.getLicenca())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
        }
        frigorificoRepository.save(obj);
        return ResponseEntity.ok(obj);
    }

    @PostMapping(value = "/logar")
    public ResponseEntity<Frigorifico> logar(@Valid @RequestBody Login obj) {
        List<Frigorifico> frigorificos = frigorificoRepository.findAll();
        for (Frigorifico f : frigorificos) {
            if (f.getEmail().equals(obj.getEmail()) && f.getSenha().equals(obj.getSenha())) {
                return ResponseEntity.ok(f);
            }
        }
        return ResponseEntity.notFound().build();
    }


    @DeleteMapping(value = "/deletar")
    public ResponseEntity<String> delete(@Valid @RequestBody Frigorifico obj) {
        List<Frigorifico> frigorificos = frigorificoRepository.findAll();
        for (Frigorifico u : frigorificos) {
            if (u.getLicenca().equals(obj.getLicenca())) {
                frigorificoRepository.delete(obj);
                return ResponseEntity.ok((obj.getLicenca() + "DELETADO"));
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/atualizar")
    public ResponseEntity<Frigorifico> update(@Valid @RequestBody Frigorifico obj) {
        if (!frigorificoRepository.existsById(obj.getId())) {
            return ResponseEntity.notFound().build();
        }
        frigorificoRepository.save(obj);
        return ResponseEntity.ok(obj);
    }

    @PostMapping(value = "/filtrar")
    ResponseEntity<List<Frigorifico>> filtrar(@Valid @RequestBody FiltroFrigorificos obj) {
        List<Frigorifico> frigorificos = frigorificoRepository.findAll();
        List<Frigorifico> filtro = new ArrayList<>();
        for (Frigorifico f : frigorificos) {
            if (f.getEndereco().getCep().equals(obj.getCep())) {
                filtro.add(f);
            }
        }
        return ResponseEntity.ok().body(filtro);
    }

}

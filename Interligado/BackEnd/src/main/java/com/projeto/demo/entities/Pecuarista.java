package com.projeto.demo.entities;


import com.projeto.demo.utils.Config;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(schema = Config.SCHEMA, name=Config.PECUARISTA)
public class Pecuarista implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @NotBlank
    @Column(name = "Cpf")
    private String cpf;

    @NotBlank
    @Column(name = "Nome")
    private String nome;

    @NotBlank
    @Column(name = "NomePropriedade")
    private String nomePropriedade;

    @NotBlank
    @Column(name = "inscricao")
    private String inscricao;

    @NotBlank
    @Column(name = "Referencia")
    private String referencia;

    @NotBlank
    @Column(name = "Contato")
    private String contato;

    @NotBlank
    @Column(name = "Email")
    private String email;

    @NotBlank
    @Column(name = "Senha")
    private String senha;

    @NotBlank
    @Column(name = "InformacaoGeral")
    private String informacaoGeral;

    @NotBlank
    @Column(name = "Cep")
    private String cep;

    @OneToMany
    @JoinColumn(name = "pecuarista", referencedColumnName = "id")
    private List<LoteAnimal> loteAnimal;



    public Pecuarista(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomePropriedade() {
        return nomePropriedade;
    }

    public void setNomePropriedade(String nomePropriedade) {
        this.nomePropriedade = nomePropriedade;
    }

    public String getInscricao() {
        return inscricao;
    }

    public void setInscricao(String inscricao) {
        this.inscricao = inscricao;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getInformacaoGeral() {
        return informacaoGeral;
    }

    public void setInformacaoGeral(String informacaoGeral) {
        this.informacaoGeral = informacaoGeral;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public List<LoteAnimal> getLoteAnimal() {
        return loteAnimal;
    }

    public void setLoteAnimal(List<LoteAnimal> loteAnimal) {
        this.loteAnimal = loteAnimal;
    }


}

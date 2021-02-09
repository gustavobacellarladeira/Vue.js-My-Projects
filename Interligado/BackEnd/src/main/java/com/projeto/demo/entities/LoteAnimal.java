package com.projeto.demo.entities;


import com.projeto.demo.utils.Config;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;


@Entity
@Table(schema = Config.SCHEMA, name=Config.LOTEANIMAl)
public class LoteAnimal implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @NotBlank
    @Column
    private String raca;

    @NotBlank
    @Column
    private String sexo;

    @NotBlank
    @Column
    private String castrado;

    @NotBlank
    @Column
    private String idade;

    @NotBlank
    @Column
    private String sistemaCriacao;

    @NotBlank
    @Column
    private String pesoEstimado;

    @Column
    @NotBlank
    private String quantidade;

    @NotBlank
    @Column
    private String informacoesAdicionais;


    public LoteAnimal(){
    }

    public LoteAnimal(@NotBlank String raca, @NotBlank String sexo, @NotBlank String castrado, @NotBlank String idade, @NotBlank String sistemaCriacao, @NotBlank String pesoEstimado, @NotBlank String quantidade, @NotBlank String informacoesAdicionais) {
        this.raca = raca;
        this.sexo = sexo;
        this.castrado = castrado;
        this.idade = idade;
        this.sistemaCriacao = sistemaCriacao;
        this.pesoEstimado = pesoEstimado;
        this.quantidade = quantidade;
        this.informacoesAdicionais = informacoesAdicionais;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getIdade() {
        return idade;
    }

    public void setIdade(String idade) {
        this.idade = idade;
    }

    public String getSistemaCriacao() {
        return sistemaCriacao;
    }

    public void setSistemaCriacao(String sistemaCriacao) {
        this.sistemaCriacao = sistemaCriacao;
    }

    public String getPesoEstimado() {
        return pesoEstimado;
    }

    public void setPesoEstimado(String pesoEstimado) {
        this.pesoEstimado = pesoEstimado;
    }

    public String getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(String quantidade) {
        this.quantidade = quantidade;
    }

    public String getInformacoesAdicionais() {
        return informacoesAdicionais;
    }

    public void setInformacoesAdicionais(String informacoesAdicionais) {
        this.informacoesAdicionais = informacoesAdicionais;
    }

    public String getCastrado() {
        return castrado;
    }

    public void setCastrado(String castrado) {
        this.castrado = castrado;
    }
}

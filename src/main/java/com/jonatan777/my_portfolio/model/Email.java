package com.jonatan777.my_portfolio.model;


public class Email {
    
    String nome;
    String fone;
    String email;
    String descricao;

    public Email(String nome, String fone, String email, String descricao) {
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFone() {
        return fone;
    }

    public void setFone(String fone) {
        this.fone = fone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    


}


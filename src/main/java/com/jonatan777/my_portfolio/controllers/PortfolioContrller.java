package com.jonatan777.my_portfolio.controllers;

import com.jonatan777.my_portfolio.model.Email;
import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.mail.SimpleMailMessage;


@Controller
public class PortfolioContrller {


    @Autowired 
    private JavaMailSender mailSender;

  
    @GetMapping("/")
    public String home() {
    	
        return "home.html";
    }
    
    
    @GetMapping("/about")
    public String sobre() {
    	
        return "sobre.html";
    }

    @GetMapping("/contato")
    public String portfolio() {
    	
        return "contato.html";
    }

    @GetMapping("/portfolio")
    public String contact() {
    	
        return "portfolio.html";
    }






    @PostMapping("send")
    public String sendMaill(Email email)throws MessagingException{
       
        String nome = email.getNome();
        String fone = email.getFone();
        String email2 = email.getEmail();
        String descricao = email.getDescricao(); 

        System.out.println("nome: " + nome + " fone: " + fone + " email: " + email2 + " descricao: " + descricao);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setText("nome: " + nome + ", fone: " + fone + ", email: " + email2 + ", descricao: " + descricao);
        message.setTo("jonataneduardo777@gmail.com");
        message.setFrom("vovo.jonataneduard@gmail.com");
        message.setSubject("E-mail do SITE WEB FREELANCER");

        try {
            mailSender.send(message);
            return "home";
        } catch (Exception e) {
            e.printStackTrace();
            return "redirect:/erro";
        }
    }


}   
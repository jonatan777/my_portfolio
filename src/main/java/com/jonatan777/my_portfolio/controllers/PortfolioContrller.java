package com.jonatan777.my_portfolio.controllers;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioContrller {

  
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


    




}   
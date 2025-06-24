package com.example.monoproj.config;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.monoproj.servlet_lab.controller.HelloServlet;

@Configuration
public class ServletRegisterConfig {

    @Bean
    public ServletRegistrationBean<HelloServlet> helloServlet() {
        ServletRegistrationBean<HelloServlet> bean =
                new ServletRegistrationBean<>(new HelloServlet(), "/hello-servlet");
        bean.setLoadOnStartup(1);
        return bean;
    }
}
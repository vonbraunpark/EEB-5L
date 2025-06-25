package com.example.monoproj.config;
// 이 클래스가 속한 패키지 경로를 선언합니다.

import com.example.monoproj.servlet_lab.controller.HelloServlet;
// 직접 구현한 HelloServlet 클래스를 불러옵니다.

import org.springframework.boot.web.servlet.ServletRegistrationBean;
// Spring Boot에서 제공하는 서블릿 등록용 헬퍼 클래스를 불러옵니다.

import org.springframework.context.annotation.Bean;
// 이 메서드를 Spring Bean으로 등록하기 위한 어노테이션을 불러옵니다.

import org.springframework.context.annotation.Configuration;
// 이 클래스가 설정(Configuration) 클래스임을 나타내는 어노테이션을 불러옵니다.

@Configuration
// Spring 컨테이너가 이 클래스를 구성 설정으로 인식하도록 표시합니다.
public class ServletRegisterConfig {

    @Bean
    // 이 메서드의 반환값을 Spring ApplicationContext에 Bean으로 등록합니다.
    public ServletRegistrationBean<HelloServlet> helloServlet() {
        // HelloServlet을 등록하고, 매핑 경로를 “/hello-servlet”로 설정합니다.
        ServletRegistrationBean<HelloServlet> bean =
                new ServletRegistrationBean<>(new HelloServlet(), "/hello-servlet");
        // 서블릿을 애플리케이션 시작 시점에 로드 순서 1로 설정합니다.
        bean.setLoadOnStartup(1);
        // 등록 완료된 Bean을 컨테이너에 반환합니다.
        return bean;
    }
}

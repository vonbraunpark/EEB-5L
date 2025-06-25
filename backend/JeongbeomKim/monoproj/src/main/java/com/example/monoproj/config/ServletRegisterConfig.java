package com.example.monoproj.config;
import com.example.monoproj.servlet_lab.controller.HelloServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration // 설정과 관련된 작업
public class ServletRegisterConfig {

    @Bean // 설정을 담당하는 객체(Spring내부에서 Singleton으로 관리)
    public ServletRegistrationBean<HelloServlet> helloServlet() {
        ServletRegistrationBean<HelloServlet> bean =
                new ServletRegistrationBean<>(new HelloServlet(), "/hello-servlet");
        bean.setLoadOnStartup(1);
        return bean;
    }
}
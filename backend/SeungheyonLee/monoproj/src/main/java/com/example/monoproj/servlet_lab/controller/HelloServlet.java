package com.example.monoproj.servlet_lab.controller;  // 이 클래스가 속한 패키지 경로를 선언.

import jakarta.servlet.ServletException;            // 서블릿 예외 처리 클래스를 불러옴.
import jakarta.servlet.http.HttpServlet;            // HttpServlet을 상속하기 위한 클래스를 불러옴.
import jakarta.servlet.http.HttpServletRequest;     // 클라이언트 요청 정보를 다루는 클래스를 불러옴.
import jakarta.servlet.http.HttpServletResponse;    // 서버 응답 작성을 위한 클래스를 불러옴.

import java.io.IOException;                         // 입출력 예외 처리를 위한 클래스를 불러옴.

public class HelloServlet extends HttpServlet {     // HttpServlet을 상속하여 서블릿 클래스를 선언.
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException { // GET 요청을 처리하기 위한 메서드를 재정의.
        resp.setContentType("text/plain");          // 응답 본문의 콘텐츠 타입을 텍스트로 설정.
        resp.getWriter().write("Hello from Servlet!"); // 클라이언트에 문자열을 응답으로 작성.
    }
}

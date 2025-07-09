package com.example.simple.controller;

import com.example.simple.client.BookClient;
import com.example.simple.client.response.Book;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleController {

    private final BookClient bookClient;

    public SimpleController(BookClient bookClient) {
        this.bookClient = bookClient;
    }

    @GetMapping("/")
    public String simpleHello() {
        return "Hello Simple Service";
    }

    @GetMapping("/call-book-test")
    public Book callBookTest() {
        System.out.println("callBookTest()");
        return bookClient.test();
    }
}

package com.example.simple.controller;

import com.example.simple.client.BookClient;
import com.example.simple.client.response.BookResponse;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping(path = "/call-book-test", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BookResponse> callBookTest() {
        BookResponse result = bookClient.testBook();

        return ResponseEntity.ok(result);
    }
}

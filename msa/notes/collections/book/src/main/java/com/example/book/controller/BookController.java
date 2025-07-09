package com.example.book.controller;

import com.example.book.entity.Book;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/book")
public class BookController {

    @GetMapping("/test")
    public Book test() {
        log.info("return Book from test()");
        return new Book("제목", "내용", "저자", "isbn");
    }
}

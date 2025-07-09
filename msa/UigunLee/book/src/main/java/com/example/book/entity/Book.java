package com.example.book.entity;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class Book {
    String title;
    String content;
    String author;
    String isbn;

    public Book(String title, String content, String author, String isbn) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.isbn = isbn;
    }
}

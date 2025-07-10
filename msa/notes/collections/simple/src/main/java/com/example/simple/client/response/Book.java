package com.example.simple.client.response;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Book {
    private String title;
    private String content;
    private String author;
    private String isbn;

    @JsonCreator
    public Book(
            @JsonProperty("title") String title,
            @JsonProperty("content") String content,
            @JsonProperty("author") String author,
            @JsonProperty("isbn") String isbn) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.isbn = isbn;
    }
}


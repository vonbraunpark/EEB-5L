package com.example.simple.client;

import com.example.simple.client.response.Book;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "book")
public interface BookClient {

    @GetMapping("/test")
    Book test();
}

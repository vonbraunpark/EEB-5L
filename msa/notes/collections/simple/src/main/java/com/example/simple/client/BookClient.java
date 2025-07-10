package com.example.simple.client;

import com.example.simple.client.response.BookResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "book")
public interface BookClient {

    @GetMapping("/book/test")
    String test();

    @GetMapping("/book/test-book")
    BookResponse testBook();
}

package com.example.simple.client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "book")
public interface BookClient {

    @GetMapping("/book/hello")
    String hello();
}

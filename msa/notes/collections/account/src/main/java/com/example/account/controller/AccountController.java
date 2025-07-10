package com.example.account.controller;

import com.example.account.controller.request.LoginAccountRequest;
import com.example.account.controller.request.RegisterAccountRequest;
import com.example.account.controller.response.LoginAccountResponse;
import com.example.account.controller.response.RegisterAccountResponse;
import com.example.account.entity.Account;
import com.example.account.redis_cache.RedisCacheService;
import com.example.account.repository.AccountRepository;
import com.example.account.utility.EncryptionUtility;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private RedisCacheService redisCacheService;

    @PostMapping("/register")
    public RegisterAccountResponse register(@RequestBody RegisterAccountRequest request) {
        Account requestedAccount = request.toAccount();
        Account createdAccount = accountRepository.save(requestedAccount);

        return RegisterAccountResponse.from(createdAccount);
    }

    @PostMapping("/login")
    public LoginAccountResponse login(@RequestBody LoginAccountRequest request) {
        String userId = request.getUserId();

        Optional<Account> optionalAccount = accountRepository.findByUserId(userId);

        if (optionalAccount.isEmpty()) {
            return new LoginAccountResponse(null);
        }

        Account account = optionalAccount.get();
        String rawPassword = request.getPassword();

        boolean matched = EncryptionUtility.matches(rawPassword, account.getPassword());
        if (!matched) {
            return new LoginAccountResponse(null);  // 비밀번호 틀림
        }

        String token = UUID.randomUUID().toString();
        redisCacheService.setKeyAndValue(token, account.getId(), Duration.ofDays(1));

        return LoginAccountResponse.from(token);
    }
}

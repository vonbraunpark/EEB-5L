package com.example.monoproj.google_authentication.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/google-authentication")
@RequiredArgsConstructor
public class GoogleAuthenticationController {
    final private GoogleAuthenticationService googleAuthenticationService;
    final private AccountService accountService;
    final private AccountProfileService accountProfileService;
    final private RedisCacheService redisCacheService;

    @GetMapping("/request-login-url")
    public String requestGetLoginLink() {
        log.info("requestGetLoginLink() called");

        return googleAuthenticationService.getLoginLink();
    }

    @PostMapping("/request-access-token")
    @Transactional
    public String requestAccessToken(@RequestBody AccessTokenRequestForm accessTokenRequestForm) {
        String code = accessTokenRequestForm.getCode();

        log.info("requestGetLoginLink(): code {}", code);

        try {
            Map<String, Object> tokenResponse = kakaoAuthenticationService.requestAccessToken(code);
            String accessToken = (String) tokenResponse.get("access_token");

            Map<String, Object> userInfo = kakaoAuthenticationService.requestUserInfo(accessToken);
            log.info("userInfo: {}", userInfo);

            String nickname = (String) ((Map) userInfo.get("properties")).get("nickname");
            String email = (String) ((Map) userInfo.get("kakao_account")).get("email");
            log.info("email: {}", email);

            Account account = accountService.findAccountByEmail(email);
            log.info("account: {}", account);

            if (account == null) {
                account = accountService.createAccount(email);
                accountProfileService.createAccountProfile(account, nickname);
            }

            return createUserTokenWithAccessToken(account, accessToken);

        } catch (Exception e) {
            return "error" + e.getMessage();
        }
    }

    private String createUserTokenWithAccessToken(Account account, String accessToken) {
        try {
            String userToken = UUID.randomUUID().toString();
            redisCacheService.setKeyAndValue(account.getId(), accessToken);
            redisCacheService.setKeyAndValue(userToken, account.getId());
            return userToken;
        } catch (Exception e) {
            throw new RuntimeException("Error storing token in Redis: " + e.getMessage());
        }
    }
}

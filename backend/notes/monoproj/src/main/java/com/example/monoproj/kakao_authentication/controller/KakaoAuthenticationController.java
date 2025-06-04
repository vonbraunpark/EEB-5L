package com.example.monoproj.kakao_authentication.controller;

import com.example.monoproj.account.entity.Account;
import com.example.monoproj.account.service.AccountService;
import com.example.monoproj.account_profile.entity.AccountProfile;
import com.example.monoproj.account_profile.service.AccountProfileService;
import com.example.monoproj.kakao_authentication.controller.request_form.AccessTokenRequestForm;
import com.example.monoproj.kakao_authentication.service.KakaoAuthenticationService;
import com.example.monoproj.redis_cache.service.RedisCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.UUID;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/kakao-authentication")
public class KakaoAuthenticationController {
    final private KakaoAuthenticationService kakaoAuthenticationService;
    final private AccountService accountService;
    final private AccountProfileService accountProfileService;
    final private RedisCacheService redisCacheService;

    @GetMapping("/request-login-url")
    public String requestGetLoginLink() {
        log.info("requestGetLoginLink() called");

        return kakaoAuthenticationService.getLoginLink();
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

//            Account account = accountService.findAccountByEmail(email);
            AccountProfile profile = accountProfileService.loadProfileByEmail(email);
            Account account = profile.getAccount();
            log.info("account: {}", account);

            if (account == null) {
                account = accountService.createAccount();
                accountProfileService.createAccountProfile(account, nickname, email);
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

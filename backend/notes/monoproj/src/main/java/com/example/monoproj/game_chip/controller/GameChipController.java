package com.example.monoproj.game_chip.controller;

import com.example.monoproj.game_chip.controller.request_form.RegisterGameChipRequestForm;
import com.example.monoproj.game_chip.controller.response_form.ListGameChipResponseForm;
import com.example.monoproj.game_chip.controller.response_form.RegisterGameChipResponseForm;
import com.example.monoproj.game_chip.service.GameChipService;
import com.example.monoproj.game_chip.service.response.RegisterGameChipResponse;
import com.example.monoproj.redis_cache.service.RedisCacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/game-chip")
public class GameChipController {

    private final GameChipService gameChipService;
    final private RedisCacheService redisCacheService;

    @PostMapping
    public RegisterGameChipResponseForm create(
            @RequestHeader("Authorization") String authorization,
            @RequestBody RegisterGameChipRequestForm requestForm) {

        String token = extractToken(authorization); // Bearer 제거 등 가공
        Long accountId = redisCacheService.getValueByKey(token, Long.class);

        RegisterGameChipResponse response = gameChipService.createGameChip(requestForm.toRegisterGameChipRequest(accountId));
        return RegisterGameChipResponseForm.from(response);
    }

    @GetMapping
    public ListGameChipResponseForm list() {
        return gameChipService.getAllGameChips();
    }

    private String extractToken(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        throw new RuntimeException("Invalid Authorization header");
    }
}

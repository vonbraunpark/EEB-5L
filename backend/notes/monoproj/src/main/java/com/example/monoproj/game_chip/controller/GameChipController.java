package com.example.monoproj.game_chip.controller;

import com.example.monoproj.game_chip.controller.request_form.RegisterGameChipRequestForm;
import com.example.monoproj.game_chip.controller.response_form.ListGameChipResponseForm;
import com.example.monoproj.game_chip.controller.response_form.RegisterGameChipResponseForm;
import com.example.monoproj.game_chip.service.GameChipService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/game-chip")
public class GameChipController {

    private final GameChipService gameChipService;

    @PostMapping
    public RegisterGameChipResponseForm create(@RequestBody RegisterGameChipRequestForm requestForm) {
        return gameChipService.createGameChip(requestForm);
    }

    @GetMapping
    public ListGameChipResponseForm list() {
        return gameChipService.getAllGameChips();
    }
}

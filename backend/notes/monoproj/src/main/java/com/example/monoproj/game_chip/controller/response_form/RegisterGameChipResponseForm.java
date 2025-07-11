package com.example.monoproj.game_chip.controller.response_form;

import com.example.monoproj.game_chip.entity.GameChip;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterGameChipResponseForm {
    private final Long id;
    private final String title;
    private final int price;
    private final String imageUrl;
}

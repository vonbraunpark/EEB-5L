package com.example.monoproj.game_chip.controller.request_form;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterGameChipRequestForm {
    final private String title;
    final private int price;
    final private String imageUrl;
}

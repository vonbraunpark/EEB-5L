package com.example.monoproj.game_chip.controller.request_form;

import com.example.monoproj.game_chip.service.request.RegisterGameChipRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterGameChipRequestForm {
    final private String title;
    final private String description;
    final private int price;
    final private String imageUrl;

    public RegisterGameChipRequest toRegisterGameChipRequest(Long accountId) {
        return new RegisterGameChipRequest(title, description, price, imageUrl, accountId);
    }
}

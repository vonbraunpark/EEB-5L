package com.example.monoproj.game_chip.controller.response_form;

import com.example.monoproj.game_chip.service.response.RegisterGameChipResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterGameChipResponseForm {
    private final Long id;
    private final String title;
    private final String description;
    private final int price;
    private final String imageUrl;

    public static RegisterGameChipResponseForm from(RegisterGameChipResponse response) {
        return new RegisterGameChipResponseForm(
                response.getId(),
                response.getTitle(),
                response.getDescription(),
                response.getPrice(),
                response.getImageUrl()
        );
    }
}

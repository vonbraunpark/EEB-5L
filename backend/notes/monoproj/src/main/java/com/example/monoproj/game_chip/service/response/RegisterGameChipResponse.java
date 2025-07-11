package com.example.monoproj.game_chip.service.response;

import com.example.monoproj.game_chip.entity.GameChip;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterGameChipResponse {
    final private Long id;
    final private String title;
    final private String description;
    final private int price;
    final private String imageUrl;

    public static RegisterGameChipResponse from(GameChip gameChip) {
        return new RegisterGameChipResponse(
                gameChip.getId(),
                gameChip.getTitle(),
                gameChip.getDescription(),
                gameChip.getPrice(),
                gameChip.getImageUrl()
        );
    }
}

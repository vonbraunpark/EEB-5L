package com.example.monoproj.game_chip.service.request;

import com.example.monoproj.account.entity.Account;
import com.example.monoproj.game_chip.entity.GameChip;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterGameChipRequest {
    final private String title;
    final private String description;
    final private int price;
    final private String imageUrl;
    final private Long accountId;

    public GameChip toGameChip(Account account) {
        return new GameChip(title, description, price, imageUrl, account);
    }
}

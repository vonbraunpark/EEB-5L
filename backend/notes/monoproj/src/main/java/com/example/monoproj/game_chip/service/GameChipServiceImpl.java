package com.example.monoproj.game_chip.service;

import com.example.monoproj.account.entity.Account;
import com.example.monoproj.account.repository.AccountRepository;
import com.example.monoproj.game_chip.controller.response_form.ListGameChipResponseForm;
import com.example.monoproj.game_chip.entity.GameChip;
import com.example.monoproj.game_chip.repository.GameChipRepository;
import com.example.monoproj.game_chip.service.request.RegisterGameChipRequest;
import com.example.monoproj.game_chip.service.response.RegisterGameChipResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GameChipServiceImpl implements GameChipService {

    private final GameChipRepository gameChipRepository;
    private final AccountRepository accountRepository;

    @Override
    public RegisterGameChipResponse createGameChip(RegisterGameChipRequest request) {
        Long requestedAccountId = request.getAccountId();
        Account account = accountRepository.findById(requestedAccountId)
                .orElseThrow(() -> new IllegalArgumentException("Account 존재하지 않음"));

        GameChip requestedGameChip = request.toGameChip(account);

        GameChip savedGameChip = gameChipRepository.save(requestedGameChip);
        return RegisterGameChipResponse.from(savedGameChip);
    }

    @Override
    public ListGameChipResponseForm getAllGameChips() {
        return null;
    }
}

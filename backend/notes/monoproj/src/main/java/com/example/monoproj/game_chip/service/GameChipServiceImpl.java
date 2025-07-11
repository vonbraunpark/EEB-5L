package com.example.monoproj.game_chip.service;

import com.example.monoproj.game_chip.controller.request_form.RegisterGameChipRequestForm;
import com.example.monoproj.game_chip.controller.response_form.ListGameChipResponseForm;
import com.example.monoproj.game_chip.controller.response_form.RegisterGameChipResponseForm;
import org.springframework.stereotype.Service;

@Service
public class GameChipServiceImpl implements GameChipService {
    @Override
    public RegisterGameChipResponseForm createGameChip(RegisterGameChipRequestForm requestForm) {
        return null;
    }

    @Override
    public ListGameChipResponseForm getAllGameChips() {
        return null;
    }
}

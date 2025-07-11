package com.example.monoproj.game_chip.service;

import com.example.monoproj.game_chip.controller.request_form.RegisterGameChipRequestForm;
import com.example.monoproj.game_chip.controller.response_form.ListGameChipResponseForm;
import com.example.monoproj.game_chip.controller.response_form.RegisterGameChipResponseForm;

public interface GameChipService {
    RegisterGameChipResponseForm createGameChip(RegisterGameChipRequestForm requestForm);
    ListGameChipResponseForm getAllGameChips();
}

package com.example.monoproj.game_chip.service;

import com.example.monoproj.game_chip.controller.response_form.ListGameChipResponseForm;
import com.example.monoproj.game_chip.controller.response_form.RegisterGameChipResponseForm;
import com.example.monoproj.game_chip.service.request.RegisterGameChipRequest;
import com.example.monoproj.game_chip.service.response.RegisterGameChipResponse;

public interface GameChipService {
    RegisterGameChipResponse createGameChip(RegisterGameChipRequest request);
    ListGameChipResponseForm getAllGameChips();
}

package com.example.monoproj.game_chip.service;

import com.example.monoproj.game_chip.service.request.ListGameChipRequest;
import com.example.monoproj.game_chip.service.request.RegisterGameChipRequest;
import com.example.monoproj.game_chip.service.response.ListGameChipResponse;
import com.example.monoproj.game_chip.service.response.RegisterGameChipResponse;

public interface GameChipService {
    RegisterGameChipResponse createGameChip(RegisterGameChipRequest request);
    ListGameChipResponse getAllGameChips(ListGameChipRequest request);
}

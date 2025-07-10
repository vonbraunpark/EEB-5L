package com.example.monoproj.game_chip.controller.response_form;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class ListGameChipResponseForm {
    private final List<RegisterGameChipResponseForm> gameChips;
}

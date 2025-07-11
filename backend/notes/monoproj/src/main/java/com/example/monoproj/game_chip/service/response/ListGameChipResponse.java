package com.example.monoproj.game_chip.service.response;

import com.example.monoproj.game_chip.entity.GameChip;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@RequiredArgsConstructor
public class ListGameChipResponse {
    private final List<GameChip> gameChipList;
    private final int currentPage;
    private final int totalPages;
    private final long totalItems;

    public static ListGameChipResponse from(List<GameChip> gameChipList, int currentPage, int totalPages, long totalItems) {
        return new ListGameChipResponse(gameChipList, currentPage, totalPages, totalItems);
    }
}


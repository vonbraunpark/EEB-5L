package com.example.monoproj.game_chip.controller.response_form;

import com.example.monoproj.game_chip.service.response.ListGameChipResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@RequiredArgsConstructor
public class ListGameChipResponseForm {
    private final List<Map<String, Object>> gameChipList;
    private final int totalItems;
    private final int totalPages;

    public static ListGameChipResponseForm from(ListGameChipResponse response) {
        List<Map<String, Object>> list = response.getGameChipList().stream()
                .map(gameChip -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("id", gameChip.getId());
                    map.put("title", gameChip.getTitle());
                    map.put("description", gameChip.getDescription());
                    map.put("price", gameChip.getPrice());
                    map.put("imageUrl", gameChip.getImageUrl());
                    return map;
                })
                .collect(Collectors.toList());

        return new ListGameChipResponseForm(list, (int) response.getTotalItems(), response.getTotalPages());
    }
}

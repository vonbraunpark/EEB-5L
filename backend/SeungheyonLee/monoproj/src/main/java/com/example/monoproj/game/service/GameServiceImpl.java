package com.example.monoproj.game.service;

import com.example.monoproj.game.entity.Game;
import com.example.monoproj.game.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GameServiceImpl implements GameService {
    private final GameRepository gameRepository;
    @Override
    public Long start() {
        Game savedGame=gameRepository.save(new Game());
        return savedGame.getId();
    }
}

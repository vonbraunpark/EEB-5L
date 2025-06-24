package com.example.monoproj.game.service;

import com.example.monoproj.game.entity.Game;
import com.example.monoproj.game.repository.GameRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class GameServiceTest {
    @Mock
    private GameRepository gameRepository;

    @InjectMocks
    private GameServiceImpl gameService;

    @Test
    void start는_game_객체의_id를_리턴함() {
        Game fakeGame = new Game();
        ReflectionTestUtils.setField(fakeGame, "id", 7L);

        when(gameRepository.save(any(Game.class))).thenReturn(fakeGame);

        Long result = gameService.start();

        assertEquals(7L, result);
    }
}

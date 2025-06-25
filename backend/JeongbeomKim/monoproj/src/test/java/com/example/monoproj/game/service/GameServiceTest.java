package com.example.monoproj.game.service;

import com.example.monoproj.game.entity.Game;
import com.example.monoproj.game.repository.GameRepository;
import org.junit.jupiter.api.BeforeEach;
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

    private Game mockGame;

    @BeforeEach
    void setup () {
        mockGame = new Game();
        ReflectionTestUtils.setField(mockGame, "id", 7L);
    }

    @Test
    void start는_game_객체의_id를_리턴함 () {
        // repository의 save가 호출되면 [ when() ]
        // thenReturn 을 통해 고정적으로 mockGame이 리턴되게 만들어라.
        when(gameRepository.save(any(Game.class))).thenReturn(mockGame);

        // Service 내부에서 위의 Repository 코드가 실행되므로
        //
        Long result = gameService.start();

        assertEquals(7L, result);
    }
}
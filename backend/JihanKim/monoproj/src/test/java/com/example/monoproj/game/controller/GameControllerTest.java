package com.example.monoproj.game.controller;

import com.example.monoproj.game.entity.Game;
import com.example.monoproj.game.service.GameService;
import com.example.monoproj.redis_cache.service.RedisCacheService;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class GameControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private GameService gameService;

    // 실제로 게임을 시작한다고 하면 Controller -> Service -> Repository
    // 위 흐름으로 작업이 진행 될 것이고
    // Game 시작이란 뜻은 결론적으로 Game Entity를 생성한 것이 될 것임.
    // 왜냐하면 게임은 시작과 끝이 있기 때문 (생명 주기 존재)
    // 시작과 끝이 있기 때문에 여러 게임이 생성 될 수 있음
    @Test
    void testStartGame() throws Exception {
        when(gameService.start()).thenReturn(1L);

        mockMvc.perform(get("/game/start"))
                .andExpect(status().isOk())
                .andExpect(content().string("1"));
    }
}

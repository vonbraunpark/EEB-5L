package com.example.monoproj.game.service;

import com.example.monoproj.game.entity.Game;
import com.example.monoproj.game.repository.GameRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.reactivestreams.Publisher;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.util.ReflectionTestUtils;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;



// Mockito 프레임워크를 활성화하여 @Mock, @InjectMocks 어노테이션을 지원합니다.
@ExtendWith(MockitoExtension.class)
public class GameServiceTest {

    // GameRepository를 Mockito mock 객체로 생성합니다.
    @Mock
    private GameRepository gameRepository;

    // 위의 mock을 주입하여 GameServiceImpl 인스턴스를 생성합니다.
    @InjectMocks
    private GameServiceImpl gameService;

    private Game mockGame;

    // 테스트 실행 전에 매번 호출되는 메서드로, 공통으로 사용할 mock Game 객체를 초기화합니다.
    @BeforeEach
    void setup() {
        mockGame = new Game();
        // private 필드인 id 값을 리플렉션을 통해 강제로 설정합니다.
        // mockgame의 id를 7로 설정
        ReflectionTestUtils.setField(mockGame, "id", 7L);
    }

    @Test
    void start는_game_객체의_id를_리턴함() {
        // given: gameRepository.save()가 호출되면 mockGame 객체를 반환하도록 설정합니다.
        // repository의 save가 호출되면 when()
        // thenReturn을 통해 고정적으로 mockGame이 리턴되게 만들어라.
        when(gameRepository.save(any(Game.class)))
                .thenReturn(mockGame);
        //service 내부에서 위의 repostiory 코드가 실행되므로
        //여기서 result로 수신하는 값은 mockGame의 "id"값인 7L
        // when: GameServiceImpl의 start() 메서드를 호출합니다.
        Long result = gameService.start();

        // then: 반환된 result가 mockGame에 설정한 id(7L)와 일치하는지 검증합니다.
        // 실질적으로 service 코드가 잘 실행되었다면 result가 7L이므로
        // 아래의 검사 루틴을 정상적으로 통과할 것임.
        assertEquals(7L, result);
    }
}

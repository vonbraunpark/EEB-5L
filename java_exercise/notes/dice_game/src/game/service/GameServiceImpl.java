package game.service;

import authentication.repository.AuthenticationRepository;
import authentication.repository.AuthenticationRepositoryImpl;
import console_ui.entity.ConsoleUiMessage;
import console_ui.repository.ConsoleUiRepository;
import console_ui.repository.ConsoleUiRepositoryImpl;
import game.repository.GameRepository;
import game.repository.GameRepositoryImpl;
import utility.KeyboardInput;

public class GameServiceImpl implements GameService {
    private static GameServiceImpl instance;

    private final GameRepository gameRepository;
    private final ConsoleUiRepository consoleUiRepository;
    private final AuthenticationRepository authenticationRepository;

    private GameServiceImpl() {
        this.gameRepository = GameRepositoryImpl.getInstance();
        this.consoleUiRepository = ConsoleUiRepositoryImpl.getInstance();
        this.authenticationRepository = AuthenticationRepositoryImpl.getInstance();
    }

    public static GameServiceImpl getInstance() {
        if (instance == null) {
            instance = new GameServiceImpl();
        }

        return instance;
    }

    @Override
    public void startGame() {
        // 1. 처음 게임에 진입 하면 환영 메시지 출력
        consoleUiRepository.displayWelcomeMessage();
        // 2. 다음으로 회원가입, 로그인, 종료라는 기본 메뉴 제공
        consoleUiRepository.displayInitialMessage();
        String userInput = KeyboardInput.getStringInput("입력: ");
        // ConsoleUiMessage.SIGNUP
        // ConsoleUiMessage.SIGNIN
        // ConsoleUiMessage.EXIT
        ConsoleUiMessage selectedMessage = ConsoleUiMessage.fromUserInput(userInput);
        consoleUiRepository.displayMessageFromUserInput(selectedMessage);
        // 3. 로그인 시 출력되는 메뉴가 별도로 필요함 (이건 아직 미정)
    }
}

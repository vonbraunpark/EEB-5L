package game.service;

import account.entity.Account;
import account.repository.AccountRepository;
import account.repository.AccountRepositoryImpl;
import account.service.request.SignInRequest;
import account.service.request.SignUpRequest;
import authentication.entity.Authentication;
import authentication.repository.AuthenticationRepository;
import authentication.repository.AuthenticationRepositoryImpl;
import console_ui.entity.ConsoleUiMessage;
import console_ui.repository.ConsoleUiRepository;
import console_ui.repository.ConsoleUiRepositoryImpl;
import game.repository.GameRepository;
import game.repository.GameRepositoryImpl;
import utility.KeyboardInput;

import java.util.EnumMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Consumer;

public class GameServiceImpl implements GameService {
    private static GameServiceImpl instance;

    private final GameRepository gameRepository;
    private final ConsoleUiRepository consoleUiRepository;
    private final AuthenticationRepository authenticationRepository;
    private final AccountRepository accountRepository;

    private final Map<ConsoleUiMessage, Consumer<Object>> dispatcher = new EnumMap<>(ConsoleUiMessage.class);

    private GameServiceImpl() {
        this.gameRepository = GameRepositoryImpl.getInstance();
        this.consoleUiRepository = ConsoleUiRepositoryImpl.getInstance();
        this.authenticationRepository = AuthenticationRepositoryImpl.getInstance();
        this.accountRepository = AccountRepositoryImpl.getInstance();

        dispatcher.put(ConsoleUiMessage.SIGNUP, this::handleSignUp);
        dispatcher.put(ConsoleUiMessage.SIGNIN, this::handleSignIn);
        dispatcher.put(ConsoleUiMessage.EXIT, this::handleExit);
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

        while (true) {
            Boolean isAuthenticated = AuthenticationRepositoryImpl.isAuthenticated();
            // Boolean isInGame = GameRepositoryImpl.isInGame();
            Boolean isInGame = false;
            // 2. 다음으로 회원가입, 로그인, 종료라는 기본 메뉴 제공
            // 3. 로그인 시 출력되는 메뉴가 별도로 필요함 (이건 아직 미정)
            consoleUiRepository.displayInitialMessage(isAuthenticated, isInGame);
            String userInput = KeyboardInput.getStringInput("입력: ");
            ConsoleUiMessage selectedMessage = null;

            try {
                if (!isAuthenticated) {
                    selectedMessage = ConsoleUiMessage.fromUserInput(String.valueOf(userInput));
                }
                if (isAuthenticated && !isInGame) {
                    selectedMessage = ConsoleUiMessage.fromUserInput(String.valueOf(userInput + 3));
                }
                if (isAuthenticated && isInGame) {
                    // +5 보정 (주사위 굴리기 6, 항복 7)
                    selectedMessage = ConsoleUiMessage.fromUserInput(String.valueOf(userInput + 5));
                }

                Object result = consoleUiRepository.displayMessageFromUserInput(selectedMessage);

                Consumer<Object> handler = dispatcher.get(selectedMessage);
                if (handler != null) handler.accept(result);

                if (selectedMessage == ConsoleUiMessage.EXIT) break;

            } catch (IllegalArgumentException e) {
                System.out.println("잘못된 입력입니다.");
            }
        }
    }

    private void handleSignUp(Object result) {
        if (result instanceof SignUpRequest request) {
            Account account = new Account(request.getUserId(), request.getPassword());
            accountRepository.save(account);
        }
    }

    private void handleSignIn(Object result) {
        if (result instanceof SignInRequest request) {
            String userId = request.getUserId();
            Optional<Account> maybeAccount = accountRepository.findByUserId(userId);

            if (maybeAccount.isEmpty()) {
                System.out.println("아이디 혹은 비밀번호를 잘못 입력했습니다.");
                return;
            }

            Account account = maybeAccount.get();

            String password = request.getPassword();
            if (account.getPassword().equals(password)) {
                System.out.println("로그인 성공");
                authenticationRepository.save(true);
            }
        }
    }

    private void handleExit(Object ignored) {
        authenticationRepository.save(false); // 로그아웃 처리
    }
}

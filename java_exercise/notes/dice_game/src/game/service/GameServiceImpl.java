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

import java.util.Optional;

public class GameServiceImpl implements GameService {
    private static GameServiceImpl instance;

    private final GameRepository gameRepository;
    private final ConsoleUiRepository consoleUiRepository;
    private final AuthenticationRepository authenticationRepository;
    private final AccountRepository accountRepository;

    private GameServiceImpl() {
        this.gameRepository = GameRepositoryImpl.getInstance();
        this.consoleUiRepository = ConsoleUiRepositoryImpl.getInstance();
        this.authenticationRepository = AuthenticationRepositoryImpl.getInstance();
        this.accountRepository = AccountRepositoryImpl.getInstance();
    }

    public static GameServiceImpl getInstance() {
        if (instance == null) {
            instance = new GameServiceImpl();
        }

        return instance;
    }

    @Override
    public void startGame() {
        while (true) {
            // 1. 처음 게임에 진입 하면 환영 메시지 출력
            consoleUiRepository.displayWelcomeMessage();
            // 2. 다음으로 회원가입, 로그인, 종료라는 기본 메뉴 제공
            consoleUiRepository.displayInitialMessage();
            String userInput = KeyboardInput.getStringInput("입력: ");
            // ConsoleUiMessage.SIGNUP
            // ConsoleUiMessage.SIGNIN
            // ConsoleUiMessage.EXIT
            ConsoleUiMessage selectedMessage = ConsoleUiMessage.fromUserInput(userInput);
            Object result = consoleUiRepository.displayMessageFromUserInput(selectedMessage);
            if (result instanceof SignUpRequest request) {
                Account account = new Account(request.getUserId(), request.getPassword());
                accountRepository.save(account);
            }

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

            if (selectedMessage == ConsoleUiMessage.EXIT) break;
            // 3. 로그인 시 출력되는 메뉴가 별도로 필요함 (이건 아직 미정)
        }
    }
}

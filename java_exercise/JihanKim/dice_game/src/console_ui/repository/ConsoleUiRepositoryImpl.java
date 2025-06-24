package console_ui.repository;

import console_ui.entity.ConsoleUiMessage;

import java.util.EnumMap;
import java.util.Map;

public class ConsoleUiRepositoryImpl implements ConsoleUiRepository {
    private static ConsoleUiRepositoryImpl instance;

    private ConsoleUiRepositoryImpl() {
        actionMap.put(ConsoleUiMessage.SIGNUP, this::displaySignUp);
        actionMap.put(ConsoleUiMessage.SIGNIN, this::displaySignIn);
        actionMap.put(ConsoleUiMessage.EXIT, this::displayExit);
    }

    private final Map<ConsoleUiMessage, Runnable> actionMap = new EnumMap<>(ConsoleUiMessage.class);

    public static ConsoleUiRepositoryImpl getInstance() {
        if (instance == null) {
            instance = new ConsoleUiRepositoryImpl();
        }

        return instance;
    }

    @Override
    public void displayWelcomeMessage() {
        System.out.println("주사위 게임에 접속하신 것을 환영합니다!");
    }

    @Override
    public void displayInitialMessage() {
        System.out.println("1. 회원 가입\n2. 로그인\n3. 종료");
    }

    @Override
    public void displayMessageFromUserInput(ConsoleUiMessage message) {
        Runnable action = actionMap.get(message);
        if (action != null) {
            action.run();
            return;
        }

        System.out.println("알 수 없는 명령을 요청하였습니다.");
    }

    private void displaySignUp() {
        System.out.println("회원 가입을 시작합니다.");
    }

    private void displaySignIn() {
        System.out.println("로그인을 시작합니다.");
    }

    private void displayExit() {
        System.out.println("프로그램을 종료합니다.");
    }
}

package console_ui.repository;


import account.service.request.SignInRequest;
import account.service.request.SignUpRequest;
import console_ui.entity.ConsoleUiMessage;
import utility.KeyboardInput;

import java.util.EnumMap;
import java.util.Map;
import java.util.function.Supplier;

public class ConsoleUiRepositoryImpl implements ConsoleUiRepository {
    private static ConsoleUiRepositoryImpl instance;

    private ConsoleUiRepositoryImpl() {
        actionMap.put(ConsoleUiMessage.SIGNUP, this::displaySignUp);
        actionMap.put(ConsoleUiMessage.SIGNIN, this::displaySignIn);
        actionMap.put(ConsoleUiMessage.EXIT, this::displayExit);
    }

    public static ConsoleUiRepositoryImpl getInstance() {
        if (instance == null) {
            instance = new ConsoleUiRepositoryImpl();
        }

        return instance;
    }

    // Runnable은 리턴 타입이 void 입니다.
    // 반면 Supplier는 리턴이 가능하므로 변경합니다.
    private final Map<ConsoleUiMessage, Supplier<Object>> actionMap = new EnumMap<>(ConsoleUiMessage.class);

    @Override
    public void displayWelcomeMessage() {
        System.out.println("주사위 게임에 접속하신 것을 환영합니다!");
    }

    @Override
    public void displayInitialMessage() {
        System.out.println("1. 회원 가입\n2. 로그인\n3. 종료");
    }

    @Override
    public Object displayMessageFromUserInput(ConsoleUiMessage message) {
        Supplier<Object> action = actionMap.get(message);
        if (action != null) {
            return action.get();
        }

        throw new IllegalArgumentException("지원하지 않는 명령입니다: " + message);
    }

    private SignUpRequest displaySignUp() {
        System.out.println("회원 가입을 시작합니다.");
        String userInputId = KeyboardInput.getStringInput("아이디를 입력하세요: ");
        String userInputPassword = KeyboardInput.getStringInput("비밀번호를 입력하세요: ");

        return new SignUpRequest(userInputId, userInputPassword);
    }

    private SignInRequest displaySignIn() {
        System.out.println("로그인을 시작합니다.");
        String userInputId = KeyboardInput.getStringInput("아이디를 입력하세요: ");
        String userInputPassword = KeyboardInput.getStringInput("비밀번호를 입력하세요: ");

        return new SignInRequest(userInputId, userInputPassword);
    }

    private Object displayExit() {
        System.out.println("프로그램을 종료합니다.");
        return null;
    }
}

package console_ui.repository;



public class ConsoleUiRepositoryImpl implements ConsoleUiRepository {
    private static ConsoleUiRepositoryImpl instance;

    private ConsoleUiRepositoryImpl() { }

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
}

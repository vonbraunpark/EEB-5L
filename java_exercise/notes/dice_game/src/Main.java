import game.service.GameService;
import game.service.GameServiceImpl;

public class Main {
    public static void main(String[] args) {
        GameService gameService = GameServiceImpl.getInstance();
        gameService.startGame();

//        ConsoleUiService consoleUiService = ConsoleUiServiceImpl.getInstance();
    }
}
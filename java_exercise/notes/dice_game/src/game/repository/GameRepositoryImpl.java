package game.repository;

public class GameRepositoryImpl implements GameRepository {
    private static GameRepositoryImpl instance;

    private GameRepositoryImpl() { }

    public static GameRepositoryImpl getInstance() {
        if (instance == null) {
            instance = new GameRepositoryImpl();
        }

        return instance;
    }

}

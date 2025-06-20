package authentication.repository;

import game.repository.GameRepositoryImpl;

public class AuthenticationRepositoryImpl implements AuthenticationRepository {
    private static AuthenticationRepositoryImpl instance;

    private AuthenticationRepositoryImpl() { }

    public static AuthenticationRepositoryImpl getInstance() {
        if (instance == null) {
            instance = new AuthenticationRepositoryImpl();
        }

        return instance;
    }
}

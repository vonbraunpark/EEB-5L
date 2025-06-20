package authentication.repository;

import account.entity.Account;
import authentication.entity.Authentication;

import java.util.HashMap;
import java.util.Map;

public class AuthenticationRepositoryImpl implements AuthenticationRepository {
    private static AuthenticationRepositoryImpl instance;

    private AuthenticationRepositoryImpl() { }

    public static AuthenticationRepositoryImpl getInstance() {
        if (instance == null) {
            instance = new AuthenticationRepositoryImpl();
        }

        return instance;
    }

    private static boolean authenticated = false;

    public static boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void save(Boolean isAuthenticated) {
        authenticated = isAuthenticated;
    }
}

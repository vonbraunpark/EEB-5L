package authentication.repository;

import authentication.entity.Authentication;

public interface AuthenticationRepository {
    void save(Boolean isAuthenticated);
}

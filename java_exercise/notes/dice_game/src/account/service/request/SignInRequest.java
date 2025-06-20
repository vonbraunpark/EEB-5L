package account.service.request;

public class SignInRequest {
    private final String userId;
    private final String password;

    public SignInRequest(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public String getPassword() {
        return password;
    }
}

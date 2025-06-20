package account.service.request;

public class SignUpRequest {
    private final String userId;
    private final String password;

    public SignUpRequest(String userId, String password) {
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

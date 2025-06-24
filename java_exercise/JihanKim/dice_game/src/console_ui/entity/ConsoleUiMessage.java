package console_ui.entity;

public enum ConsoleUiMessage {
    SIGNUP("1"),
    SIGNIN("2"),
    EXIT("3");

    private final String userInputKey;

    ConsoleUiMessage(String userInputKey) {
        this.userInputKey = userInputKey;
    }

    public static ConsoleUiMessage fromUserInput(String input) {
        for (ConsoleUiMessage message : ConsoleUiMessage.values()) {
            if (message.userInputKey.equals(input)) {
                return message;
            }
        }
        throw new IllegalArgumentException("Invalid user input:" + input);
    }
}

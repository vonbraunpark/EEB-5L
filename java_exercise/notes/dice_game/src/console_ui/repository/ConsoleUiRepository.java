package console_ui.repository;

import console_ui.entity.ConsoleUiMessage;

public interface ConsoleUiRepository {
    void displayWelcomeMessage();
    void displayInitialMessage();
    Object displayMessageFromUserInput(ConsoleUiMessage message);
}

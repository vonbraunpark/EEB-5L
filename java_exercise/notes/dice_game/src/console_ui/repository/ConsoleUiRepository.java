package console_ui.repository;

import console_ui.entity.ConsoleUiMessage;

public interface ConsoleUiRepository {
    void displayWelcomeMessage();
    void displayInitialMessage();
    void displayMessageFromUserInput(ConsoleUiMessage message);
}

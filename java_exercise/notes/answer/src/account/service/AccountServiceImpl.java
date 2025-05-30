package account.service;

import account.entity.Account;
import account.repository.AccountRepository;
import account.repository.AccountRepositoryImpl;
import utility.KeyboardInput;

public class AccountServiceImpl implements AccountService {

    private static AccountServiceImpl instance;

    private final AccountRepository accountRepository;

    private AccountServiceImpl() {
        this.accountRepository = AccountRepositoryImpl.getInstance();
    }

    public static AccountServiceImpl getInstance() {
        if (instance == null) {
            instance = new AccountServiceImpl();
        }

        return instance;
    }

    private final int PASSWORD_MINIMUM_LENGTH = 4;

    @Override
    public int register() {
        System.out.println("회원 가입을 진행합니다!");
        String userId = KeyboardInput.getStringInput("아이디를 입력하세요: ");
        String password = KeyboardInput.getStringInput("비밀번호를 입력하세요: ");

        int passwordLength = password.length();
        while (passwordLength < PASSWORD_MINIMUM_LENGTH) {
            System.out.println("비밀 번호가 너무 짧습니다. 다시 작성하세요.");
            password = KeyboardInput.getStringInput("비밀번호를 입력하세요: ");
            passwordLength = password.length();
        }

        Account account = new Account(userId, password);
        return accountRepository.save(account);
    }
}

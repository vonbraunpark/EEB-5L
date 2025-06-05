import account.service.AccountService;
import account.service.AccountServiceImpl;

import fruit.entity.FruitType;
import fruit.service.FruitService;
import fruit.service.FruitServiceImpl;

public class Main {
    public static void main(String[] args) {
        FruitService fruitService = FruitServiceImpl.getInstance();
        fruitService.register(FruitType.APPLE, 5000, 1000);

        AccountService accountService = AccountServiceImpl.getInstance();
        accountService.register();
        accountService.singIn();
    }
}
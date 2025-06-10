import account.service.AccountService;
import account.service.AccountServiceImpl;

import fruit.entity.FruitType;
import fruit.service.FruitService;
import fruit.service.FruitServiceImpl;
import order.service.OrderService;
import order.service.OrderServiceImpl;

public class Main {
    public static void main(String[] args) {
        FruitService fruitService = FruitServiceImpl.getInstance();
        fruitService.register(FruitType.APPLE, 5000, 1000);
        fruitService.register(FruitType.WATERMELON, 2000, 10000);
        fruitService.register(FruitType.PEACH, 3000, 5000);
        fruitService.register(FruitType.SHINEMUSCAT, 4000, 3000);

        AccountService accountService = AccountServiceImpl.getInstance();
        accountService.register();

        Integer accountIdToken = accountService.singIn();

        OrderService orderService = OrderServiceImpl.getInstance();
        orderService.register(accountIdToken, FruitType.PEACH, 5);
    }
}
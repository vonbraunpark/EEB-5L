import account.service.AccountService;
import account.service.AccountServiceImpl;

import fruit.entity.FruitType;
import fruit.service.FruitService;
import fruit.service.FruitServiceImpl;
import order.entity.OrderEntity;
import order.service.OrderService;
import order.service.OrderServiceImpl;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        FruitService fruitService = FruitServiceImpl.getInstance();
        fruitService.register(FruitType.APPLE, 5000, 1000);
        fruitService.register(FruitType.WATERMELON, 2000, 10000);
        fruitService.register(FruitType.PEACH, 3000, 5000);
        fruitService.register(FruitType.SHINEMUSCAT, 4000, 3000);

        AccountService accountService = AccountServiceImpl.getInstance();
        accountService.register();
        accountService.register();

        Integer accountIdToken = accountService.singIn();

        OrderService orderService = OrderServiceImpl.getInstance();
        orderService.register(accountIdToken, FruitType.PEACH, 5);
        orderService.register(accountIdToken, FruitType.WATERMELON, 20);

        List<OrderEntity> orderList = orderService.list(accountIdToken);
        for (OrderEntity order : orderList) {
            System.out.println(order);
        }
    }
}
package order.service;

import account.entity.Account;
import account.repository.AccountRepository;
import account.repository.AccountRepositoryImpl;
import fruit.entity.Fruit;
import fruit.entity.FruitType;
import fruit.repository.FruitRepository;
import fruit.repository.FruitRepositoryImpl;
import order.entity.OrderEntity;
import order.repository.OrderRepository;
import order.repository.OrderRepositoryImpl;

import java.util.List;
import java.util.Optional;

public class OrderServiceImpl implements OrderService {

    private static OrderServiceImpl instance;

    private final OrderRepository orderRepository;
    private final FruitRepository fruitRepository;
    private final AccountRepository accountRepository;

    public OrderServiceImpl() {
        this.orderRepository = OrderRepositoryImpl.getInstance();
        this.fruitRepository = FruitRepositoryImpl.getInstance();
        this.accountRepository = AccountRepositoryImpl.getInstance();
    }

    public static OrderServiceImpl getInstance() {
        if (instance == null) {
            instance = new OrderServiceImpl();
        }

        return instance;
    }

    @Override
    public int register(Integer accountIdToken, FruitType type, int quantity) {
        System.out.println("주문을 진행합니다!");
        long fruitTypeId = type.getId();

        Optional<Fruit> maybeFruit = fruitRepository.findByFruitType((int) fruitTypeId);
        if (maybeFruit.isEmpty()) {
            System.out.println("등록되지 않은 과일입니다.");
            return -1;
        }

        Fruit fruit = maybeFruit.get();
        System.out.println("fruit: " + fruit);

        if (fruit.getQuantity() < quantity) {
            System.out.println("재고가 부족하여 구매가 불가합니다.");
            return -1;
        }

        fruit.setQuantity(fruit.getQuantity() - quantity);
        fruitRepository.save(fruit);

        OrderEntity order = new OrderEntity(accountIdToken, fruitTypeId, quantity);
        return orderRepository.save(order);
    }

    @Override
    public List<OrderEntity> list(Integer accountIdToken) {
        System.out.println("주문 항목을 살펴봅니다!");
        Optional<Account> maybeAccount = accountRepository.findById(accountIdToken);
        if (maybeAccount.isEmpty()) {
            System.out.println("존재하지 않는 사용자입니다.");
            return null;
        }
        Account account = maybeAccount.get();
        return orderRepository.findAllByAccount(account);
    }
}

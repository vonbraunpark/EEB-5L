package order.repository;

import order.entity.OrderEntity;

import java.util.HashMap;
import java.util.Map;

public class OrderRepositoryImpl implements OrderRepository {

    private static OrderRepositoryImpl instance;

    private static final Map<Long, OrderEntity> orderMap = new HashMap<>();

    private OrderRepositoryImpl() {}

    public static OrderRepository getInstance() {
        if (instance == null) {
            instance = new OrderRepositoryImpl();
        }

        return instance;
    }

    @Override
    public int save(OrderEntity order) {
        System.out.println("주문 정보를 저장합니다: " + order);
        orderMap.put(order.getId(), order);
        return (int) order.getId();
    }
}

package order.service;

import fruit.entity.FruitType;
import order.entity.OrderEntity;

import java.util.List;

public interface OrderService {
    int register(Integer accountIdToken, FruitType type, int quantity);

    List<OrderEntity> list(Integer accountIdToken);
}

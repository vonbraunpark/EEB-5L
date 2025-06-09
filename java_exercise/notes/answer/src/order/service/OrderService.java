package order.service;

import fruit.entity.FruitType;

public interface OrderService {
    int register(Integer accountIdToken, FruitType type, int quantity);
}

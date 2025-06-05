package order.repository;

import order.entity.OrderEntity;

public interface OrderRepository {
    int save(OrderEntity order);
}

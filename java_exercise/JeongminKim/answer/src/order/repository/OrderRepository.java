package order.repository;

import account.entity.Account;
import order.entity.OrderEntity;

import java.util.List;

public interface OrderRepository {
    int save(OrderEntity order);

    List<OrderEntity> findAllByAccount(Account account);
}
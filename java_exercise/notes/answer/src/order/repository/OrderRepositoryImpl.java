package order.repository;

import account.entity.Account;
import order.entity.OrderEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    @Override
    public List<OrderEntity> findAllByAccount(Account account) {
        System.out.println("인증된 사용자의 주문 정보를 조회합니다 -> 사용자: " + account);
        Long accountId = account.getId();

        // orderMap.values().stream() 데이터 열거
        // filter(order -> accountId.equals(order.getAccountId()))
        // accountId가 order의 accountId와 일치하는 정보 찾기
        // collect(Collectors.toList()); 로 일치하는 정보들을 List 형태로 작성
        return orderMap.values().stream()
                .filter(order -> accountId.equals(order.getAccountId()))
                .collect(Collectors.toList());
    }
}

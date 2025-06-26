package com.example.monoproj.account.repository;

import com.example.monoproj.account.entity.AccountLoginType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountLoginTypeRepository extends JpaRepository<AccountLoginType, Long> {
}

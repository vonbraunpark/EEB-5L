package com.example.monoproj.account.service;

import com.example.monoproj.account.entity.*;
import com.example.monoproj.account.repository.AccountLoginTypeRepository;
import com.example.monoproj.account.repository.AccountRepository;
import com.example.monoproj.account.repository.AccountRoleTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {
    final private AccountRepository accountRepository;
    final private AccountRoleTypeRepository accountRoleTypeRepository;
    final private AccountLoginTypeRepository accountLoginTypeRepository;

    @Override
    @Transactional
    public Account createAccount(LoginType loginType) {
        AccountRoleType accountRoleType = new AccountRoleType(RoleType.NORMAL);
        AccountRoleType createdAccountRoleType = this.accountRoleTypeRepository.save(accountRoleType);

        AccountLoginType accountLoginType = new AccountLoginType(loginType);
        AccountLoginType createdAccountLoginType = this.accountLoginTypeRepository.save(accountLoginType);

        Account account = new Account(createdAccountRoleType, createdAccountLoginType);
        return this.accountRepository.save(account);
    }
}

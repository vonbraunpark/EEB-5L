package com.example.monoproj.account_profile.service;


import com.example.monoproj.account.entity.Account;
import com.example.monoproj.account_profile.entity.AccountProfile;

public interface AccountProfileService {
    AccountProfile createAccountProfile(Account account, String nickname, String email);
    AccountProfile loadProfileByEmail(String email);
}

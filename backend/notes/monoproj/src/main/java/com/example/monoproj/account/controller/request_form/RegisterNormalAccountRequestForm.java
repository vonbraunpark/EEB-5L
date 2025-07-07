package com.example.monoproj.account.controller.request_form;

import com.example.monoproj.board.service.request.CreateBoardRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class RegisterNormalAccountRequestForm {
    private String email;
    private String nickname;
    private String loginType;
    private String tempUserToken;

    public RegisterNormalAccountRequest toRegisterNormalAccountRequest(Long accountId) {
        return new RegisterNormalAccountRequest(loginType);
    }
}




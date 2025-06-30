package com.example.monoproj.board.service;

import com.example.monoproj.account.entity.Account;
import com.example.monoproj.account.repository.AccountRepository;
import com.example.monoproj.account_profile.entity.AccountProfile;
import com.example.monoproj.account_profile.repository.AccountProfileRepository;
import com.example.monoproj.board.entity.Board;
import com.example.monoproj.board.repository.BoardRepository;
import com.example.monoproj.board.service.request.CreateBoardRequest;
import com.example.monoproj.board.service.request.ListBoardRequest;
import com.example.monoproj.board.service.request.UpdateBoardRequest;
import com.example.monoproj.board.service.response.CreateBoardResponse;
import com.example.monoproj.board.service.response.ListBoardResponse;
import com.example.monoproj.board.service.response.ReadBoardResponse;
import com.example.monoproj.board.service.response.UpdateBoardResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    final private BoardRepository boardRepository;
    final private AccountRepository accountRepository;
    final private AccountProfileRepository accountProfileRepository;



    @Override
    public CreateBoardResponse register(CreateBoardRequest createBoardRequest) {
        log.info("accountId: {}", createBoardRequest.getAccountId());

        Account account = accountRepository.findById(createBoardRequest.getAccountId())
                .orElseThrow(() -> new RuntimeException("Account 존재하지 않음"));

        log.info("account: {}", account);

        AccountProfile accountProfile = accountProfileRepository.findByAccount(account)
                .orElseThrow(() -> new RuntimeException("AccountProfile not found"));

        log.info("account profile: {}", accountProfile);

        Board board = boardRepository.save(createBoardRequest.toBoard(accountProfile));
        return CreateBoardResponse.from(board);
    }


}

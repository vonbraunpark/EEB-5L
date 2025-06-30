package com.example.monoproj.sample_board.service;

import com.example.monoproj.account.repository.AccountRepository;
import com.example.monoproj.account_profile.repository.AccountProfileRepository;
import com.example.monoproj.sample_board.entitiy.SampleBoard;
import com.example.monoproj.sample_board.repository.SampleBoardRepository;
import com.example.monoproj.sample_board.service.request.ListSampleBoardRequest;
import com.example.monoproj.sample_board.service.response.ListSampleBoardResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class SampleBoardServiceImpl implements SampleBoardService {

    private final AccountRepository accountRepository;
    private final AccountProfileRepository accountProfileRepository;
    private final SampleBoardRepository sampleBoardRepository;

    @Override
    public ListSampleBoardResponse listSampleBoard() {

        List<SampleBoard> all = sampleBoardRepository.findAll();

        return new ListSampleBoardResponse(all);

    }
}

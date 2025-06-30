package com.example.monoproj.sample_board.service;

import com.example.monoproj.board.service.request.ListBoardRequest;
import com.example.monoproj.sample_board.service.request.ListSampleBoardRequest;
import com.example.monoproj.sample_board.service.response.ListSampleBoardResponse;

public interface SampleBoardService {
    ListSampleBoardResponse listSampleBoard();
}

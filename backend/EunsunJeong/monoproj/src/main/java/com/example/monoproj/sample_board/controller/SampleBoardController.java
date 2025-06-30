package com.example.monoproj.sample_board.controller;

import com.example.monoproj.sample_board.controller.response_form.ListSampleBoardResponseForm;
import com.example.monoproj.sample_board.service.SampleBoardService;
import com.example.monoproj.sample_board.service.response.ListSampleBoardResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/sample_board")
public class SampleBoardController {

    final private SampleBoardService sampleBoardService;

    @GetMapping("/list")
    public ListSampleBoardResponseForm boardList(){

        ListSampleBoardResponse response = sampleBoardService.listSampleBoard();

        return new ListSampleBoardResponseForm(response.getBoardListWithNicknames());
    }
}

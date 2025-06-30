package com.example.monoproj.sample_board.controller;
import com.example.monoproj.sample_board.controller.request_form.CreateSampleBoardRequestForm;
import com.example.monoproj.sample_board.controller.response_form.CreateSampleBoardResponseForm;
import com.example.monoproj.sample_board.service.SampleBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * 인증 없이 누구나 게시글을 등록할 수 있는 샘플 게시판 API 컨트롤러
 */
@Slf4j                                       // 로깅을 위해 Logger 자동 생성
@RestController                             // JSON 응답을 기본으로 하는 REST 컨트롤러
@RequiredArgsConstructor                    // final 필드 생성자 자동 주입
@CrossOrigin(origins = "*")                  // 모든 출처에서의 AJAX/CORS 요청 허용
@RequestMapping("/sample-board")             // 기본 URL 프리픽스 설정
public class SampleBoardController {

    // 서비스 계층 의존성 주입: 게시글 생성 비즈니스 로직 위임
    private final SampleBoardService boardService;

    /**
     * 게시글 등록 엔드포인트 (인증 없이 누구나 가능)
     * HTTP POST /sample-board/register
     * @param form   제목/내용을 담은 요청 양식
     * @return       생성된 게시글 정보를 담은 응답 양식
     */
    @PostMapping("/register")
    public CreateSampleBoardResponseForm registerBoard(
            @RequestBody CreateSampleBoardRequestForm form) {
        // 요청 데이터 로깅: 디버깅 및 운영 중 트래픽 분석을 위해 기록
        log.info("[no-auth] registerBoard request = {}", form);

        // Form → 도메인 서비스 요청 DTO로 변환 후 비즈니스 로직 실행
        var serviceRequest = form.toCreateBoardRequest();
        var serviceResponse = boardService.register(serviceRequest);

        // 도메인 서비스 응답 → HTTP API 응답 DTO 변환 및 반환
        return CreateSampleBoardResponseForm.from(serviceResponse);
    }
}

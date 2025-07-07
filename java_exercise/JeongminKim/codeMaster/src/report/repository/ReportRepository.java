package report.repository;
//리포트 저장소 (히스토리 기능 등)
/*
- 턴마다 유저별로 주사위 결과(1, 2, 3번) 저장
- 각 턴의 스킬 주사위 발동 여부 및 결과(예: 점수 훔침, 즉사 등) 기록
- 각 턴 종료 후 유저별 점수 상태 저장
- 게임 종료 후 전체 요약(턴 수, 승자, 최종 점수 등) 정리
- 레포트 데이터를 저장할 수 있는 구조 및 포맷 설계
- 이후 조회 기능에서 활용할 수 있도록 게임 ID별 승패 기록 저장
 */
import report.entity.ReportEntity;

import java.util.List;

public interface ReportRepository {

    int saveReport(ReportRepository report);

    List<ReportEntity> getReports(Account account);

}

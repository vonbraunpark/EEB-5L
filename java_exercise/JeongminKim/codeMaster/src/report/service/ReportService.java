package report.service;
/*
1. 숫자를 입력받아 실행할 동작을 선택
2. ① 마이페이지 ② 주사위 게임 ③ 게임 종료
3. 각 페이지에서 실행할 동작 구현
 */
import report.entity.ReportEntity;

import java.util.List;

public interface ReportService {

    int summaryBattleReport(int totalBattles, List<ReportEntity> reports);

    int userBattleReport(Integer accountIdToken, Account account, int score);
    List<ReportEntity> list(Integer accountIdToken);

}
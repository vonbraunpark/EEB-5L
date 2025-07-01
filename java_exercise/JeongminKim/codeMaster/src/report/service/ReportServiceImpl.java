package report.service;

import report.entity.ReportEntity;
import report.repository.ReportRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//리포트 생성, 조회 기능 제공
public class ReportServiceImpl {

    @Override
    int summaryBattleReport(Account account, int totalBattles, List<ReportEntity> reports){
        System.out.println("게임 결과:");
        long playerAid = account.getId();
        long playerBid = account.getId();

        Optional<Account> maybeAccount = accountRepository.findByUserId(int playerAscore, int playerBscore);
        if(maybeAccount.isPresent()){
            System.out.println("유효한 데이터가 없습니다. 다시 게임을 진행하세요.");
            return -1;
        }

        ReportEntity report = new ReportEntity(long id, int playerAscore, int playerBscore);
        return ReportRepository.save(order);
    }

    // ex) A 플레이어가 자신의 게임 히스토리를 조회할 경우 총 몇 번의 게임을 진행하였고, 몇 번 승리했는지와 패배하였는지 조회됩니다.
    // ex) 화면 출력 예시 :
    // A Player 님의 게임 히스토리를 조회합니다.
    // [A Player] ~전 ~승 ~무 ~패 (승률 : %)
    @Override
    int userBattleReport(Account account, List<ReportEntity> report){

        System.out.println(account.userId+"Player 님의 게임 히스토리를 조회합니다.");


        System.out.println(
                report.totalBattleCount+"전"
                +report.winCount+"승"+report.loseCount
                +report.drawCount+"무"
                +report.loseCount+"패"
                + "(승률 : "+(double)(report.winCount/report.totalBattleCount)+"%)");




        public List<ReportEntity> getReports(Account account){
            System.out.println(account+"Player 님의 게임 히스토리를 조회합니다.");
            Long accountId = account.getId();

            return reportMap.values().stream()
                    .filter(report -> accountId.equals(report.getId()))
                    .collect(Collectors.toList());
    }












}

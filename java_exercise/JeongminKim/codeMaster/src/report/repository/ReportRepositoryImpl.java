package report.repository;

import report.entity.ReportEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

//리포트 저장소 (히스토리 기능 등)
public class ReportRepositoryImpl implements ReportRepository {

    private static ReportRepositoryImpl instance;
    private static final Map<Long, ReportEntity> reportMap = new HashMap<>();

    private ReportRepositoryImpl() {}
    public static ReportRepositoryImpl getInstance() {
        if(instance == null){
            instance = new ReportRepositoryImpl();
        }
        return instance;
    }

    // ex) 플레이어들의 게임 히스토리를 저장합니다. 만약 오류 시 게임 재안내 메시지 출력
    // 어떻게 게임을 하는 유저 A와 B의 ID를 가져올 것인가? ((몇 만 명일 경우?)) ((Account에서 두 명의 플레이어 아이디를 세팅해서 받아오는 식으로 가야할 듯?)
    
    @Override
    public int saveReport(ReportEntity report) {
        System.out.println("게임 히스토리를 저장합니다.");
        reportMap.put(report.getId(), report);
        return (int) report.getId();

        if(reportMap.isEmpty()){
            System.out.println("오류로 인해 게임 히스토리를 저장하지 못했습니다. 게임을 다시 시작하세요.");
            return -1;
        }
    }



    }

}

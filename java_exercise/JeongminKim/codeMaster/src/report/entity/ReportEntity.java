package report.entity;

public class ReportEntity {
    private long id;                    // Player ID
    private int diceResultNum;          // 주사위 총합
    private boolean usedSkill;          // 스킬 사용 여부
    private boolean isWinner;           // 승리 여부
    private long totalBattleCount;      // 총 배틀 수
    private long winCount;              // 승리 수
    private long loseCount;             // 패배 수

    public ReportEntity(long id, int diceResultNum, boolean usedSkill, boolean isWinner, long totalBattleCount, long winCount, long loseCount) {
        this.id = id;
        this.diceResultNum = diceResultNum;
        this.usedSkill = usedSkill;
        this.isWinner = isWinner;
        this.totalBattleCount = totalBattleCount;
        this.winCount = winCount;
        this.loseCount = loseCount;
    }

    public boolean isUsedSkill() {
        return usedSkill;
    }

    public long getId() {
        return id;
    }

    public int getDiceResultNum() {
        return diceResultNum;
    }

    public boolean isWinner() {
        return isWinner;
    }

    public long getTotalBattleCount() {
        return totalBattleCount;
    }

    public long getWinCount() {
        return winCount;
    }

    public long getLoseCount() {
        return loseCount;
    }

}

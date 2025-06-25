package com.example.monoproj.dice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.ToString;

@Entity
@Getter
@ToString
public class Dice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer number;

    private String userToken;  // ← 사용자 토큰 저장용 필드

    // DTO → 엔티티 변환용 생성자
    public Dice(Integer number, String userToken) {
        this.number = number;
        this.userToken = userToken;
    }

    public Dice() { }

    public void setNumber(Integer number) {
        this.number = number;
    }
    public void setUserToken(String userToken) {
        this.userToken = userToken;
    }
}

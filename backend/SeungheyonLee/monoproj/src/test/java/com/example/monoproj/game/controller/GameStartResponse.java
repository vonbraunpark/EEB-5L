package com.example.monoproj.game.controller;

public class GameStartResponse {
    private Long gameId;
    public GameStartResponse(Long gameId) { this.gameId = gameId; }
    public Long getGameId()  { return gameId; }
}

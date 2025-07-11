package com.example.monoproj.game_chip.repository;

import com.example.monoproj.game_chip.entity.GameChip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameChipRepository extends JpaRepository<GameChip, Long> {
}

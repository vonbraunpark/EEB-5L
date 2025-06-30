package com.example.monoproj.board.repository;

import com.example.monoproj.board.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {

}

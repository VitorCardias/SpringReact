package com.project.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.DSMovie.entities.Score;
import com.project.DSMovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}

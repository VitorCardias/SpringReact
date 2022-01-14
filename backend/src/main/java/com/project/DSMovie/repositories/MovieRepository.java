package com.project.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.DSMovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}

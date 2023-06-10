package com.grupo9.digitalBooking.music.model.repository;

import com.grupo9.digitalBooking.music.model.entities.Category;
import com.grupo9.digitalBooking.music.model.entities.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICategory extends JpaRepository<Category, Long> {
    @Query("SELECT c FROM Category c where c.name = ?1")
    Optional<Category> findByName(String name);
}

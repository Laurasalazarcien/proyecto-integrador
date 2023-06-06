package com.grupo9.digitalBooking.music.model.repository;

import com.grupo9.digitalBooking.music.model.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategory extends JpaRepository<Category, Long> {
}

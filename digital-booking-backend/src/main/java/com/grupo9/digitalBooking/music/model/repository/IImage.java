package com.grupo9.digitalBooking.music.model.repository;

import com.grupo9.digitalBooking.music.model.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImage extends JpaRepository<Image, Long> {
}

package com.grupo9.digitalBooking.music.model.repository;

import com.grupo9.digitalBooking.music.model.entities.Category;
import com.grupo9.digitalBooking.music.model.entities.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IInstrument extends JpaRepository<Instrument, Long> {

    List<Instrument> findByCategoryId(Long categoryId);
}

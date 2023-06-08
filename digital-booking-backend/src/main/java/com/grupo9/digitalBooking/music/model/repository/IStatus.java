package com.grupo9.digitalBooking.music.model.repository;

import com.grupo9.digitalBooking.music.model.entities.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IStatus extends JpaRepository<Status, Long> {
    List<Status> findByStatusId(Long statusId);
}

package com.grupo9.digitalBooking.music.model.controller;


import com.grupo9.digitalBooking.music.model.DTO.BookingDTO;
import com.grupo9.digitalBooking.music.model.entities.Booking;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    IBookingService bookingService;

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody BookingDTO bookingDTO){
        Booking newBooking = bookingService.createBooking(bookingDTO);
        return ResponseEntity.status(HttpStatus.OK).body(newBooking);
    }

    @GetMapping("/{id}")
    public BookingDTO getBooking(@PathVariable Long id){
        return bookingService.readBooking(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyBooking(@RequestBody BookingDTO bookingDTO){
        bookingService.modifyBooking(bookingDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeBooking(@PathVariable Long id) {
        bookingService.removeBooking(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<BookingDTO> getallBookings(){
        return bookingService.getAll();
    }
}

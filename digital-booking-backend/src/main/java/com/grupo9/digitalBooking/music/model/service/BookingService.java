package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.BookingDTO;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IBookingService;
import com.grupo9.digitalBooking.music.model.entities.Booking;
import com.grupo9.digitalBooking.music.model.repository.IBooking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BookingService implements IBookingService {

    @Autowired
    private IBooking BookingRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveBooking(BookingDTO bookingDTO){
        Booking booking =mapper.convertValue(bookingDTO, Booking.class);
        BookingRepository.save(booking);
    }

    @Override
    public void createBooking(BookingDTO bookingDTO) {
        saveBooking(bookingDTO);
    }

    @Override
    public BookingDTO readBooking(Long id) {
        Optional<Booking> bookings = BookingRepository.findById(id);
        BookingDTO bookingDTO = null;
        if(bookings.isPresent())
            bookingDTO = mapper.convertValue(bookings, BookingDTO.class);

        return bookingDTO;
    }

    @Override
    public void modifyBooking(BookingDTO bookingDTO) {
        saveBooking(bookingDTO);
    }

    @Override
    public void removeBooking(Long id) {
        BookingRepository.deleteById(id);
    }

    @Override
    public Set<BookingDTO> getAll() {
        List<Booking> bookings = BookingRepository.findAll();
        Set<BookingDTO> bookingDTOS = new HashSet<>();

        for (Booking booking1 : bookings) {
            bookingDTOS.add(mapper.convertValue(booking1, BookingDTO.class));
        }

        return bookingDTOS;

    }
}

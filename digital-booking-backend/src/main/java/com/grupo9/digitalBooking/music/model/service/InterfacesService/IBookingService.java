package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.BookingDTO;

import java.util.Set;

public interface IBookingService {

    void createBooking(BookingDTO bookingDTO);
    BookingDTO readBooking(Long id);
    void modifyBooking(BookingDTO bookingDTO);
    void removeBooking(Long id);
    Set<BookingDTO> getAll();
}

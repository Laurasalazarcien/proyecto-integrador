package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.BookingDTO;
import com.grupo9.digitalBooking.music.model.entities.Instrument;
import com.grupo9.digitalBooking.music.model.entities.Status;
import com.grupo9.digitalBooking.music.model.entities.UserApp;
import com.grupo9.digitalBooking.music.model.repository.IInstrument;
import com.grupo9.digitalBooking.music.model.repository.IStatus;
import com.grupo9.digitalBooking.music.model.repository.IUser;
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
    private IBooking bookingRepository;
    
    @Autowired
    private IUser userRepository;

    @Autowired
    private IInstrument instrumentRepository;

    @Autowired
    private IStatus statusRepository;

    @Autowired
    ObjectMapper mapper;

    private Booking saveBooking(Booking booking){
        return bookingRepository.save(booking);
    }

    @Override
    public Booking createBooking(BookingDTO bookingDTO) {
        UserApp user = userRepository.findUserById(bookingDTO.getUserApp().getId());
        Booking newBooking = new Booking();

        if (user != null) {
            Instrument instrument = instrumentRepository.findInstrumentById(bookingDTO.getInstrument().getId());
            Status status = statusRepository.findStatusById(bookingDTO.getStatus().getId());

            newBooking.setStartDate(bookingDTO.getStartDate());
            newBooking.setFinalDate(bookingDTO.getFinalDate());
            newBooking.setInstrument(instrument);
            newBooking.setStatus(status);
            newBooking.setUserApp(user);
            newBooking = saveBooking(newBooking);

            instrument.setStatus(status);
            instrumentRepository.save(instrument);
        }

        return newBooking;
    }

    @Override
    public BookingDTO readBooking(Long id) {
        Optional<Booking> bookings = bookingRepository.findById(id);
        BookingDTO bookingDTO = null;
        if(bookings.isPresent())
            bookingDTO = mapper.convertValue(bookings, BookingDTO.class);

        return bookingDTO;
    }

    @Override
    public void modifyBooking(BookingDTO bookingDTO) {
//        saveBooking(bookingDTO);
    }

    @Override
    public void removeBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public Set<BookingDTO> getAll() {
        List<Booking> bookings = bookingRepository.findAll();
        Set<BookingDTO> bookingDTOS = new HashSet<>();

        for (Booking booking1 : bookings) {
            bookingDTOS.add(mapper.convertValue(booking1, BookingDTO.class));
        }

        return bookingDTOS;

    }
}

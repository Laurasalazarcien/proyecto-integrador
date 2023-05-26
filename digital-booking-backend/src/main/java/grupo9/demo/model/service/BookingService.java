package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.BookingDTO;
import grupo9.demo.model.entities.Booking;
import grupo9.demo.model.repository.IBooking;
import grupo9.demo.model.service.InterfacesService.IBookingService;
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

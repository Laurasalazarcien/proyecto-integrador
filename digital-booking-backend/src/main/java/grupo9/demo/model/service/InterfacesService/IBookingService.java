package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.BookingDTO;

import java.util.Set;

public interface IBookingService {

    void createBooking(BookingDTO bookingDTO);
    BookingDTO readBooking(Long id);
    void modifyBooking(BookingDTO bookingDTO);
    void removeBooking(Long id);
    Set<BookingDTO> getAll();
}

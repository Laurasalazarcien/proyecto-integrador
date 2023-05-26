package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBooking extends JpaRepository<Booking, Long> {
}

package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInstrument extends JpaRepository<Instrument, Long> {
}

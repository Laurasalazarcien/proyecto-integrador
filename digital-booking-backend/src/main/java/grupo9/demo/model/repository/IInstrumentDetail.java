package grupo9.demo.model.repository;

import grupo9.demo.model.entities.InstrumentDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInstrumentDetail extends JpaRepository<InstrumentDetail, Long> {
}

package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Instrumentos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInstrumentos extends JpaRepository<Instrumentos, Long> {
}

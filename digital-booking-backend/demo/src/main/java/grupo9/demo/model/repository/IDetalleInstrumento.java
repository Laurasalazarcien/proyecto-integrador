package grupo9.demo.model.repository;

import grupo9.demo.model.entities.DetalleInstrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDetalleInstrumento extends JpaRepository<DetalleInstrumento, Long> {
}

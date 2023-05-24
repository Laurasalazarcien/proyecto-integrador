package grupo9.demo.model.repository;

import grupo9.demo.model.Categoria;
import grupo9.demo.model.DetalleInstrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDetalleInstrumento extends JpaRepository<DetalleInstrumento, Long> {
}

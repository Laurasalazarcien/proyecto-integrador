package grupo9.demo.model.repository;

import grupo9.demo.model.Marca;
import grupo9.demo.model.Reservas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReservas extends JpaRepository<Reservas, Long> {
}

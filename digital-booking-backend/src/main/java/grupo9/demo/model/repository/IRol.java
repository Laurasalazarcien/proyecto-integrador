package grupo9.demo.model.repository;

import grupo9.demo.model.Reservas;
import grupo9.demo.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRol extends JpaRepository<Rol, Long> {
}

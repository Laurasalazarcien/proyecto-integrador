package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Estado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEstado extends JpaRepository<Estado, Long> {
}

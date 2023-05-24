package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMarca extends JpaRepository<Marca, Long> {
}

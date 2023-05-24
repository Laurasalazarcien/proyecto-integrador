package grupo9.demo.model.repository;

import grupo9.demo.model.Categoria;
import grupo9.demo.model.Estado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEstado extends JpaRepository<Estado, Long> {
}

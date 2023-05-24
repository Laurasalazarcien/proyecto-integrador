package grupo9.demo.model.repository;

import grupo9.demo.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoria extends JpaRepository<Categoria, Long> {
}

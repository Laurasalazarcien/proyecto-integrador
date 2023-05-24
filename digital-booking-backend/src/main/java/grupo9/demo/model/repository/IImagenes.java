package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Imagenes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenes extends JpaRepository<Imagenes, Long> {
}

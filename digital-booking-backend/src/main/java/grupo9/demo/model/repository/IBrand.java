package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBrand extends JpaRepository<Brand, Long> {
}

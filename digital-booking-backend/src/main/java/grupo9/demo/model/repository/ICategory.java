package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategory extends JpaRepository<Category, Long> {
}

package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStatus extends JpaRepository<Status, Long> {
}

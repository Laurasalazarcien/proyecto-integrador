package grupo9.demo.model.repository;

import grupo9.demo.model.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarios extends JpaRepository<Usuario, Long> {
}

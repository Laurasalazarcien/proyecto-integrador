package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table (name="Rol")
public class Rol {

    @Id
    @SequenceGenerator(name = "rol_sequence", sequenceName = "rol_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "rol_sequence")
    private Long id;
    private String name;

    @OneToMany(mappedBy = "rol")
    @JsonIgnore
    private Set<User> user;

}

package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;


import javax.persistence.*;
@Getter
@Setter
@Entity
@Table (name="user")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String lastName;
    private String dni;
    private String password;


    @ManyToOne
    @JoinColumn(name = "rol_id")
    private  Rol rol;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Booking> booking;

}

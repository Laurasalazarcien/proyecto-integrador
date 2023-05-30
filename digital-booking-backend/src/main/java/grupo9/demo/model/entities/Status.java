package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
import javax.persistence.*;
@Getter
@Setter
@Entity
@Table (name="status")
public class Status {

    @Id
    @GeneratedValue
    private Long id;
    private String name;


    @OneToMany(mappedBy = "status")
    @JsonIgnore
    private Set<Booking> booking;

    @OneToMany(mappedBy = "status")
    @JsonIgnore
    private  Set<Instrument> instrument;

}

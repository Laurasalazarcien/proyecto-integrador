package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
import javax.persistence.*;
@Getter
@Setter
@Entity
@Table (name="category")
public class Category {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private Set<Instrument> instrument;



}

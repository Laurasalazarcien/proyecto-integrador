package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="brand")
public class Brand {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "brand")
    @JsonIgnore
    private Set<Instrument> instrument;

    public Set<Instrument> getInstrument() {
        return instrument;
    }

    public void setInstrument(Set<Instrument> instrument) {this.instrument = this.instrument;}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

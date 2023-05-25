package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.OneToMany;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table (name="instrumentDetail")

public class InstrumentDetail {

    @Id
    @GeneratedValue
    private Long id;
    private String description;

    @OneToMany(mappedBy = "instrumentDetail")
    @JsonIgnore
    private Set<Instrument> instrument;

    public Set<Instrument> getInstrument() {
        return instrument;
    }

    public void setInstrument(Set<Instrument> instrument) {
        this.instrument = instrument;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

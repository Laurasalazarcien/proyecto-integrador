package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;
import javax.persistence.*;

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

    public Set<Booking> getBooking() {
        return booking;
    }

    public void setBooking(Set<Booking> booking) {
        this.booking = booking;
    }

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

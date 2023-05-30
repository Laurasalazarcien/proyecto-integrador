package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.OneToMany;
import java.util.Set;

import javax.persistence.*;

@Getter
@Setter
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


}

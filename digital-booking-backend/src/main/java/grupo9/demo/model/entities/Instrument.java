package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table (name="instrument")
public class Instrument {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Double price;
    private String description;
    private String images;
    private String characteristics;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;
    @ManyToOne
    @JoinColumn(name = "instrument_detail_id")
    private InstrumentDetail instrumentDetail;
    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @OneToMany(mappedBy = "instrument")
    @JsonIgnore
    private Set<Booking> booking;

    @OneToMany(mappedBy = "instrument")
    @JsonIgnore
    private Set<Image> image;

}
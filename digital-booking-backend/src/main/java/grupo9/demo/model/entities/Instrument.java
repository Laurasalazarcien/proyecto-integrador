package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Set;


@Getter
@Setter
@Entity
@Table (name="instrument")
public class Instrument {

    @Id
    @SequenceGenerator(name = "instrument_sequence", sequenceName = "instrument_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "instrument_sequence")
    private Long id;
    private String name;
    private Double price;
    private String description;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String characteristics;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String images;

    private Integer stock;


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
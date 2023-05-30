package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
@Getter
@Setter
public class InstrumentDTO {

    private Long id;
    private String name;
    private Double price;
    private String description;
    private Category category;
    private String images;
    private Brand brand;
    private InstrumentDetail instrumentDetail;
    private Status status;
    private String characteristics;
    private Set<Booking> bookings;
    private Set<Image> image;

}

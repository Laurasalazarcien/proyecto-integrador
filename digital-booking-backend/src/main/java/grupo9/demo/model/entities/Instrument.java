package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table (name="instrument")
public class Instrument {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Double price;
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "marca_id")
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

    public void setImage(Set<Image> image) {
        this.image = image;
    }

    public Set<Image> getImage() {
        return image;
    }

    public Set<Booking> getBooking() {
        return booking;
    }

    public void setBooking(Set<Booking> booking) {
        this.booking = booking;
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }


    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public InstrumentDetail getInstrumentDetail() {
        return instrumentDetail;
    }

    public void setInstrumentDetail(InstrumentDetail instrumentDetail) {
        this.instrumentDetail = instrumentDetail;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
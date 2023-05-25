package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.*;

import java.util.Set;

public class InstrumentDTO {

    private Long id;
    private String name;
    private Double price;
    private String description;
    private Category category;
    private Brand brand;
    private InstrumentDetail instrumentDetail;
    private Status status;

    private Set<Booking> bookings;

    private Set<Image> image;

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

    public Category getCategoria() {
        return category;
    }

    public void setCategoria(Category category) {
        this.category = category;
    }

    public Brand getMarca() {
        return brand;
    }

    public void setMarca(Brand brand) {
        this.brand = brand;
    }

    public InstrumentDetail getDetalleInstrumento() {
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

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

    public Set<Image> getImages() {
        return image;
    }

    public void setImages(Set<Image> images) {
        this.image = images;
    }
}

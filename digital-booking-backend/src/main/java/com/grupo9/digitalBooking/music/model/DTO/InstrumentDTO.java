package com.grupo9.digitalBooking.music.model.DTO;

import com.grupo9.digitalBooking.music.model.entities.*;
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
    private String characteristics;
    private String images;
    private Integer stock;
    private Category category;
    private Brand brand;
    private InstrumentDetail instrumentDetail;
    private Status status;
    private Set<Booking> bookings;
    private Set<Image> image;


}

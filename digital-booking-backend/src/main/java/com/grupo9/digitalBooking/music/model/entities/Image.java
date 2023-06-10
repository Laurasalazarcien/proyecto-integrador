package com.grupo9.digitalBooking.music.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import javax.persistence.*;

@Getter
@Setter
@Entity
@Table (name="image")

public class Image {

    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "image_sequence")
    private Long id;
    private String name;
    private String url;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "instrument_id", nullable = false)
    private Instrument instrument;

}

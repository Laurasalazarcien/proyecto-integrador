package com.grupo9.digitalBooking.music.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;


import javax.persistence.*;

@Getter
@Setter
@Entity
@Table (name="user")
public class User {

    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_sequence")
    private Long id;
    private String name;
    private String lastName;
    private String dni;
    private String password;
    private String address;
    private String email;
    private Boolean verify = false;

    @ManyToOne
    @JoinColumn(name = "rol_id")
    private  Rol rol;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Booking> booking;


}

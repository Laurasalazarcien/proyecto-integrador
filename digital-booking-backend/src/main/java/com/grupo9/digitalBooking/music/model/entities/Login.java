package com.grupo9.digitalBooking.music.model.entities;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Login {
    private String email;
    private String password;
    private String status;
}

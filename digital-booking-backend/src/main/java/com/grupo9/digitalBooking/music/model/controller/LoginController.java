package com.grupo9.digitalBooking.music.model.controller;

import com.grupo9.digitalBooking.music.model.DTO.UserDTO;
import com.grupo9.digitalBooking.music.model.entities.Login;
import com.grupo9.digitalBooking.music.model.repository.IUser;
import com.grupo9.digitalBooking.music.model.service.UserServiceApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserServiceApi userService;

    @Autowired
    IUser userRepository;

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping
    public ResponseEntity<?> login(@RequestBody Login login) {
        ResponseEntity<?> response = ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Message: Wrong email");

        UserDTO user = userService.loginUser(login);
        if(user != null) {
            if(user.getPassword().equals(login.getPassword())) {
                response = ResponseEntity.status(HttpStatus.OK).body(user);
            } else {
                response = ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("Message: Wrong password");
            }
        }

        return response;
    }


}

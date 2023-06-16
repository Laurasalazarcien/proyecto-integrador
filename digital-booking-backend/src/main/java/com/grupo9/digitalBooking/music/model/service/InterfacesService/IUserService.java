package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.UserDTO;
import com.grupo9.digitalBooking.music.model.entities.Login;

import java.util.Set;

public interface IUserService {

    UserDTO createUser(UserDTO userDTO);
    UserDTO readUser(Long id);
    UserDTO modifyUser(UserDTO userDTO);
    Boolean removeUser(Long id);
    Set<UserDTO> getAll();

    UserDTO loginUser(Login login);


    // @Query("SELECT * FROM user as where name=?")
    // UserDTO searchUser(String name, String password);
}

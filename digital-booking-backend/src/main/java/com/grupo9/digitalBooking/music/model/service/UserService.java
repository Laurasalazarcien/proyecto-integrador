package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.RolDTO;
import com.grupo9.digitalBooking.music.model.entities.Login;
import com.grupo9.digitalBooking.music.model.repository.IRol;
import com.grupo9.digitalBooking.music.model.repository.IUser;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IUserService;
import com.grupo9.digitalBooking.music.model.DTO.UserDTO;
import com.grupo9.digitalBooking.music.model.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Logger;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUser userRepository;



    private static final Logger LOGGER = Logger.getLogger(String.valueOf(UserService.class));

    @Autowired
    ObjectMapper mapper;

    private UserDTO saveUser(UserDTO userDTO){
        User user = mapper.convertValue(userDTO, User.class);
        UserDTO result = mapper.convertValue(userRepository.save(user), UserDTO.class);

        return result;
    }

    private Boolean existById(Long id) {
        return userRepository.findById(id).isPresent();
    }

    public Boolean existByEmail(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public UserDTO userByEmail(String email) {
        UserDTO response = null;
        if(existByEmail(email)) {
            response = mapper.convertValue(userRepository.findByEmail(email), UserDTO.class);
        }

        return response;
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        UserDTO response = null;
        Boolean existUser = userRepository.findByEmail(userDTO.getEmail()).isPresent();
        Boolean existDNI = userRepository.findByDni(userDTO.getDni()).isPresent();
        if(!existUser && !existDNI) {

            response = saveUser(userDTO);
        }
        LOGGER.info("respuesta: " + response);
        return response;
    }

    @Override
    public UserDTO readUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        UserDTO userDTO = null;
        if(user.isPresent())
            userDTO = mapper.convertValue(user, UserDTO.class);

        return userDTO;
    }

    @Override
    public UserDTO modifyUser(UserDTO userDTO) {
        LOGGER.info("Update Rol..." + " - " + userDTO.getId());
        UserDTO response = null;
        Boolean validateUser = existById(userDTO.getId());

        if(validateUser) {
            response = saveUser(userDTO);
        }
        LOGGER.info("response: " + response);
        return response;
    }

    @Override
    public Boolean removeUser(Long id) {
        Boolean response = false;
        Boolean exist = existById(id);
        if(exist) {
            userRepository.deleteById(id);
            response = true;
        }
        LOGGER.info("response: " + response);
        return response;
    }

    @Override
    public Set<UserDTO> getAll() {
        List<User> users = userRepository.findAll();
        Set<UserDTO> userDTOS = new HashSet<>();

        for (User user : users) {
            userDTOS.add(mapper.convertValue(user, UserDTO.class));
        }

        return userDTOS;

    }

    @Override
    public UserDTO loginUser(Login login) {

        return userByEmail(login.getEmail());
    }
}

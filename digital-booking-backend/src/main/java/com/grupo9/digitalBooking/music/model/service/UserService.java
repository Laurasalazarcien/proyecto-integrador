package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.RolDTO;
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

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        UserDTO response = null;
        Boolean existRol = userRepository.findByEmail(userDTO.getEmail()).isPresent();
        if(!existRol) {

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
    public void modifyUser(UserDTO userDTO) {
        saveUser(userDTO);
    }

    @Override
    public void removeUser(Long id) {
        userRepository.deleteById(id);
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
}

package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.UserDTO;
import grupo9.demo.model.entities.User;
import grupo9.demo.model.repository.IUser;
import grupo9.demo.model.service.InterfacesService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUser userRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveUser(UserDTO userDTO){
        User user =mapper.convertValue(userDTO, User.class);
        userRepository.save(user);
    }



    @Override
    public void createUser(UserDTO userDTO) {
        saveUser(userDTO);
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

package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.UserDTO;

import java.util.Set;

public interface IUserService {
    void createUser(UserDTO userDTO);
    UserDTO readUser(Long id);
    void modifyUser(UserDTO userDTO);
    void removeUser(Long id);
    Set<UserDTO> getAll();
}

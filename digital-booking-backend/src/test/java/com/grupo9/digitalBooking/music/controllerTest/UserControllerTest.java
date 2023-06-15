package com.grupo9.digitalBooking.music.controllerTest;

import com.grupo9.digitalBooking.music.model.DTO.UserDTO;
import com.grupo9.digitalBooking.music.model.controller.UserController;
import com.grupo9.digitalBooking.music.model.entities.Rol;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IRolService;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IUserService;
import com.grupo9.digitalBooking.music.model.service.RolService;
import com.grupo9.digitalBooking.music.model.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserControllerTest {

    @Test
    public void createUser_ValidUserDTO_ReturnsCreatedUserDTO() {
        // Arrange
        IUserService userService = mock(UserService.class);
        IRolService rolService = mock(RolService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;
        userController.rolService = (RolService) rolService;

        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L);
        userDTO.setName("John");
        userDTO.setLastName("Doe");
        userDTO.setDni("123456789");
        userDTO.setPassword("password");
        userDTO.setAddress("123 Main St");
        userDTO.setEmail("john@example.com");

        Rol rol = new Rol();
        rol.setId(1L);
        rol.setName("User");
        userDTO.setRol(rol);

        when(((RolService) rolService).existById(1L)).thenReturn(true);
        when(userService.createUser(userDTO)).thenReturn(userDTO);

        // Act
        ResponseEntity<?> response = userController.createUser(userDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userDTO, response.getBody());
    }

    @Test
    public void createUser_InvalidRol_ReturnsBadRequest() {
        // Arrange
        IUserService userService = mock(UserService.class);
        IRolService rolService = mock(RolService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;
        userController.rolService = (RolService) rolService;

        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L);
        userDTO.setName("John");
        userDTO.setLastName("Doe");
        userDTO.setDni("123456789");
        userDTO.setPassword("password");
        userDTO.setAddress("123 Main St");
        userDTO.setEmail("john@example.com");

        Rol rol = new Rol();
        rol.setId(1L);
        rol.setName("User");
        userDTO.setRol(rol);

        when(((RolService) rolService).existById(1L)).thenReturn(false);

        // Act
        ResponseEntity<?> response = userController.createUser(userDTO);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Message: The rol does not exist", response.getBody());
    }

    @Test
    public void getUser_ExistingUserId_ReturnsUserDTO() {
        // Arrange
        IUserService userService = mock(UserService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;

        Long userId = 1L;

        UserDTO userDTO = new UserDTO();
        userDTO.setId(userId);
        userDTO.setName("John");
        userDTO.setLastName("Doe");
        userDTO.setDni("123456789");
        userDTO.setPassword("password");
        userDTO.setAddress("123 Main St");
        userDTO.setEmail("john@example.com");

        when(userService.readUser(userId)).thenReturn(userDTO);

        // Act
        ResponseEntity<?> response = userController.getUser(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userDTO, response.getBody());
    }

    @Test
    public void getUser_NonExistingUserId_ReturnsBadRequest() {
        // Arrange
        IUserService userService = mock(UserService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;

        Long userId = 1L;

        when(userService.readUser(userId)).thenReturn(null);

        // Act
        ResponseEntity<?> response = userController.getUser(userId);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("Message: The user with 1 does not exist", response.getBody());
    }

    @Test
    public void modifyUser_ValidUserDTO_ReturnsModifiedUserDTO() {
        // Arrange
        IUserService userService = mock(UserService.class);
        IRolService rolService = mock(RolService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;
        userController.rolService = (RolService) rolService;

        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L);
        userDTO.setName("John");
        userDTO.setLastName("Doe");
        userDTO.setDni("123456789");
        userDTO.setPassword("password");
        userDTO.setAddress("123 Main St");
        userDTO.setEmail("john@example.com");

        Rol rol = new Rol();
        rol.setId(1L);
        rol.setName("User");
        userDTO.setRol(rol);

        when(((RolService) rolService).existById(1L)).thenReturn(true);
        when(userService.modifyUser(userDTO)).thenReturn(userDTO);

        // Act
        ResponseEntity<?> response = userController.modifyUser(userDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userDTO, response.getBody());
    }

    @Test
    public void removeUser_ExistingUserId_ReturnsUserWasDeleted() {
        // Arrange
        IUserService userService = mock(UserService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;

        Long userId = 1L;

        when(userService.removeUser(userId)).thenReturn(true);

        // Act
        ResponseEntity<?> response = userController.removeUser(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Message: User was delete", response.getBody());
    }

    @Test
    public void removeUser_NonExistingUserId_ReturnsBadRequest() {
        // Arrange
        IUserService userService = mock(UserService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;

        Long userId = 1L;

        when(userService.removeUser(userId)).thenReturn(false);

        // Act
        ResponseEntity<?> response = userController.removeUser(userId);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Message: The user 1 does not exist", response.getBody());
    }

    @Test
    public void getAllUsers_ExistingUsers_ReturnsAllUsers() {
        // Arrange
        IUserService userService = mock(UserService.class);
        UserController userController = new UserController();
        userController.userService = (UserService) userService;

        Set<UserDTO> users = new HashSet<>();

        UserDTO user1 = new UserDTO();
        user1.setId(1L);
        user1.setName("John");
        user1.setLastName("Doe");
        user1.setDni("123456789");
        user1.setPassword("password");
        user1.setAddress("123 Main St");
        user1.setEmail("john@example.com");

        UserDTO user2 = new UserDTO();
        user2.setId(2L);
        user2.setName("Jane");
        user2.setLastName("Smith");
        user2.setDni("987654321");
        user2.setPassword("password");
        user2.setAddress("456 Elm St");
        user2.setEmail("jane@example.com");

        users.add(user1);
        users.add(user2);

        when(userService.getAll()).thenReturn(users);

        // Act
        ResponseEntity<?> response = userController.getallUsers();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(users, response.getBody());
    }
}

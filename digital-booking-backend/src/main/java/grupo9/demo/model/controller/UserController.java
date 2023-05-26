package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.UserDTO;
import grupo9.demo.model.service.InterfacesService.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    IUserService userService;


    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO){
        userService.createUser(userDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public UserDTO getUser(@PathVariable Long id){
        return userService.readUser(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyUser(@RequestBody UserDTO userDTO){
        userService.modifyUser(userDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeUser(@PathVariable Long id) {
        userService.removeUser(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<UserDTO> getallUsers(){
        return userService.getAll();
    }
}

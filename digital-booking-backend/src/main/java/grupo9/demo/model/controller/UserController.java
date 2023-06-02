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

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO){
        userService.createUser(userDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping("/{id}")
    public UserDTO getUser(@PathVariable Long id){
        return userService.readUser(id);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PutMapping
    public ResponseEntity<?> modifyUser(@RequestBody UserDTO userDTO){
        userService.modifyUser(userDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeUser(@PathVariable Long id) {
        userService.removeUser(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping
    public Collection<UserDTO> getallUsers(){
        return userService.getAll();
    }
}

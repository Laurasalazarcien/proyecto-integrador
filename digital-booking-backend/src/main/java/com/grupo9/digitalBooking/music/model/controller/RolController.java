package com.grupo9.digitalBooking.music.model.controller;


import com.grupo9.digitalBooking.music.model.DTO.RolDTO;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IRolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/rols")
public class RolController {


    @Autowired
    IRolService rolService;

    @GetMapping("/{id}")
    public RolDTO getRol (@PathVariable Long id){
        return rolService.readRol(id);
    }

    @GetMapping
    public Collection<RolDTO> getAllRols(){
        return rolService.getAll();
    }

    @PostMapping
    public ResponseEntity<?> createRol(@RequestBody RolDTO rolDTO){

        ResponseEntity<?> response = ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("Message: The role already exists");
        Boolean isExist = rolService.createRol(rolDTO);
        if(isExist) {
            response = ResponseEntity.status(HttpStatus.OK)
                    .body("Message: The role was created");
        }
        return response;
    }


    @PutMapping
    public ResponseEntity<?> updateRol(@RequestBody RolDTO rolDTO){
        ResponseEntity<?> response = ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Message: The role does not exist");
        Boolean isModified = rolService.modifyRol(rolDTO);
        if(isModified) {
            response = ResponseEntity.status(HttpStatus.OK)
                    .body("Message: Role " + rolDTO.getId() + " was update");
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeRol(@PathVariable Long id) {
        rolService.removeRol(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

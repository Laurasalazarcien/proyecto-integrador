package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.RolDTO;
import grupo9.demo.model.service.InterfacesService.IRolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rols")
public class RolController {


    @Autowired
    IRolService rolService;


    @PostMapping
    public ResponseEntity<?> createRol(@RequestBody RolDTO rolDTO){
        rolService.createRol(rolDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public RolDTO getRol (@PathVariable Long id){
        return rolService.readRol(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyRol(@RequestBody RolDTO rolDTO){
        rolService.modifyRol(rolDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeRol(@PathVariable Long id) {
        rolService.removeRol(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

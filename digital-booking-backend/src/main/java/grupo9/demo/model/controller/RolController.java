package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.RolDTO;
import grupo9.demo.model.service.InterfacesService.IRolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rol")
public class RolController {


    @Autowired
    IRolService rolService;


    @PostMapping
    public ResponseEntity<?> crearRol(@RequestBody RolDTO rolDTO){
        rolService.crearRol(rolDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public RolDTO getRol (@PathVariable Long id){
        return rolService.leerRol(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarRol (@RequestBody RolDTO rolDTO){
        rolService.modificarRol(rolDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarRol(@PathVariable Long id) {
        rolService.eliminarRol(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

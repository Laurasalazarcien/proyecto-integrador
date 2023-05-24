package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.EstadoDTO;
import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.service.InterfacesService.IEstadoService;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/estadoz")
public class EstadoController {

    @Autowired
    IEstadoService estadoService;


    @PostMapping
    public ResponseEntity<?> crearEstado(@RequestBody EstadoDTO estadoDTO){
        estadoService.crearEstado(estadoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public EstadoDTO getEstado (@PathVariable Long id){
        return estadoService.leerEstado(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarEstado (@RequestBody EstadoDTO estadoDTO){
        estadoService.modificarEstado(estadoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarEstado(@PathVariable Long id) {
        estadoService.eliminarEstado(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

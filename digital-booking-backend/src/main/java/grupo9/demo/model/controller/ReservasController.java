package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.ReservasDTO;
import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.service.InterfacesService.IReservasService;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/reservas")
public class ReservasController {

    @Autowired
    IReservasService reservasService;


    @PostMapping
    public ResponseEntity<?> crearReserva(@RequestBody ReservasDTO reservasDTO){
        reservasService.creareReservas(reservasDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ReservasDTO getReserva (@PathVariable Long id){
        return reservasService.leerReservas(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarReserva (@RequestBody ReservasDTO reservasDTO){
        reservasService.modificarReservas(reservasDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarReserva(@PathVariable Long id) {
        reservasService.eliminarReservas(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<ReservasDTO> getallReservations(){
        return reservasService.getTodos();
    }
}

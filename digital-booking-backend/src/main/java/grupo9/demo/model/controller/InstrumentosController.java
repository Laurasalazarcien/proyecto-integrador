package grupo9.demo.model.controller;

import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.service.InterfacesService.IInstrumentosSerivce;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/instrumentos")
public class InstrumentosController {

    @Autowired
    IInstrumentosSerivce instrumentosSerivce;


    @PostMapping
    public ResponseEntity<?> crearInstrumentos(@RequestBody InstrumentosDTO instrumentosDTO){
        instrumentosSerivce.creareInstrumentos(instrumentosDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public InstrumentosDTO getInstrumentos (@PathVariable Long id){
        return instrumentosSerivce.leerInstrumentos(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarInstrumentos (@RequestBody InstrumentosDTO instrumentosDTO){
        instrumentosSerivce.modificarInstrumentos(instrumentosDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarInstrumentos(@PathVariable Long id) {
        instrumentosSerivce.eliminarInstrumentos(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<InstrumentosDTO> getallInstruments(){
        return instrumentosSerivce.getTodos();
    }
}

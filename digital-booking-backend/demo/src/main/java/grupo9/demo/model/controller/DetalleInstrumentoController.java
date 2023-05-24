package grupo9.demo.model.controller;

import grupo9.demo.model.DTO.DetalleInstrumentoDTO;
import grupo9.demo.model.service.InterfacesService.IDetalleInstrumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/detalleinstrumentos")

public class DetalleInstrumentoController {
    @Autowired
    IDetalleInstrumentoService detalleInstrumentoService;


    @PostMapping
    public ResponseEntity<?> crearDetalle(@RequestBody DetalleInstrumentoDTO detalleInstrumentoDTO){
        detalleInstrumentoService.crearDetalleInstrumento(detalleInstrumentoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public DetalleInstrumentoDTO getDetalle (@PathVariable Long id){
        return detalleInstrumentoService.leerDetalleInstrumento(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarDetalle (@RequestBody DetalleInstrumentoDTO detalleInstrumentoDTO){
        detalleInstrumentoService.modificarDetalle(detalleInstrumentoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarDetalle(@PathVariable Long id) {
        detalleInstrumentoService.eliminarDetalle(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<DetalleInstrumentoDTO> getallDetails(){
        return detalleInstrumentoService.getTodos();
    }

}

package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.DTO.MarcaDTO;
import grupo9.demo.model.service.InterfacesService.IInstrumentosSerivce;
import grupo9.demo.model.service.InterfacesService.IMarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/marcas")
public class MarcaController {

    @Autowired
    IMarcaService marcaService;


    @PostMapping
    public ResponseEntity<?> crearMarcas(@RequestBody MarcaDTO marcaDTO){
        marcaService.creareMarca(marcaDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public MarcaDTO getMarcas (@PathVariable Long id){
        return marcaService.leerMarcas(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarMarcas (@RequestBody MarcaDTO marcaDTO){
        marcaService.modificarMarcas(marcaDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarMarcas(@PathVariable Long id) {
        marcaService.eliminarMarca(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<MarcaDTO> getallBrands(){
        return marcaService.getTodos();
    }
}

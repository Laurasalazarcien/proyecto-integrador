package grupo9.demo.model.controller;

import grupo9.demo.model.DTO.InstrumentDTO;
import grupo9.demo.model.service.InterfacesService.IInstrumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/instruments")
public class InstrumentController {

    @Autowired
    IInstrumentService instrumentService;


    @PostMapping
    public ResponseEntity<?> createInstrument(@RequestBody InstrumentDTO instrumentDTO){
        instrumentService.createInstrument(instrumentDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public InstrumentDTO getInstrument(@PathVariable Long id){
        return instrumentService.readInstrument(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyInstrument(@RequestBody InstrumentDTO instrumentDTO){
        instrumentService.modifyInstrument(instrumentDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeInstrument(@PathVariable Long id) {
        instrumentService.removeInstrument(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<InstrumentDTO> getAllInstruments(){
        return instrumentService.getAll();
    }
}

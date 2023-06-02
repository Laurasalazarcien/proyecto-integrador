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

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping
    public ResponseEntity<?> createInstrument(@RequestBody InstrumentDTO instrumentDTO){
        instrumentService.createInstrument(instrumentDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping("/{id}")
    public InstrumentDTO getInstrument(@PathVariable Long id){
        return instrumentService.readInstrument(id);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PutMapping
    public ResponseEntity<?> modifyInstrument(@RequestBody InstrumentDTO instrumentDTO){
        instrumentService.modifyInstrument(instrumentDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeInstrument(@PathVariable Long id) {
        instrumentService.removeInstrument(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping
    public Collection<InstrumentDTO> getAllInstruments(){
        return instrumentService.getAll();
    }
}

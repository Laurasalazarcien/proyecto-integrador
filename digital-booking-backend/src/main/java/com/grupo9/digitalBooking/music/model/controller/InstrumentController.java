package com.grupo9.digitalBooking.music.model.controller;

import com.grupo9.digitalBooking.music.model.DTO.InstrumentDTO;
import com.grupo9.digitalBooking.music.model.service.InstrumentService;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IInstrumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/instruments")
public class InstrumentController {

    @Autowired
    IInstrumentService instrumentService;

    private static final Logger LOGGER = Logger.getLogger(String.valueOf(InstrumentController.class));


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

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping("/category/{categoryId}")
    public List<InstrumentDTO> getInstrumentsByCategory(@PathVariable Long categoryId) {
        LOGGER.info("categoryId: " + categoryId);
        return instrumentService.getInstrumentsByCategory(categoryId);
    }
}

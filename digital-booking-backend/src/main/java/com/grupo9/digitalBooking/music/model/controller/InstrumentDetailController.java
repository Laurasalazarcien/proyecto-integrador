package com.grupo9.digitalBooking.music.model.controller;

import com.grupo9.digitalBooking.music.model.DTO.InstrumentDetailDTO;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IDetailInstrumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/instrumentDetails")

public class InstrumentDetailController {
    @Autowired
    IDetailInstrumentService detailInstrumentService;


    @PostMapping
    public ResponseEntity<?> createDetail(@RequestBody InstrumentDetailDTO instrumentDetailDTO){
        detailInstrumentService.createInstrumentDetail(instrumentDetailDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public InstrumentDetailDTO getDetail(@PathVariable Long id){
        return detailInstrumentService.readInstrumentDetail(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyDetail(@RequestBody InstrumentDetailDTO instrumentDetailDTO){
        detailInstrumentService.modifyDetail(instrumentDetailDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeDetail(@PathVariable Long id) {
        detailInstrumentService.removeDetail(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<InstrumentDetailDTO> getAllDetails(){
        return detailInstrumentService.getAll();
    }

}

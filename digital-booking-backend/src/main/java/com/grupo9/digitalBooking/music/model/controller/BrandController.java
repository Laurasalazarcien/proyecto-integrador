package com.grupo9.digitalBooking.music.model.controller;


import com.grupo9.digitalBooking.music.model.DTO.BrandDTO;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/brands")
public class BrandController {

    @Autowired
    IBrandService brandService;

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping
    public ResponseEntity<?> createBrand(@RequestBody BrandDTO brandDTO){
        brandService.createBrand(brandDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping("/{id}")
    public BrandDTO getBrand(@PathVariable Long id){return brandService.readBrand(id);}

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PutMapping
    public ResponseEntity<?> modifyBrand(@RequestBody BrandDTO brandDTO){
        brandService.modifyBrand(brandDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeBrand(@PathVariable Long id) {
        brandService.removeBrand(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @GetMapping
    public Collection<BrandDTO> getallBrands(){
        return brandService.getAll();
    }
}

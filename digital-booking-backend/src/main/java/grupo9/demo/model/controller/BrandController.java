package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.BrandDTO;
import grupo9.demo.model.service.InterfacesService.IBrandService;
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


    @PostMapping
    public ResponseEntity<?> createBrand(@RequestBody BrandDTO brandDTO){
        brandService.createBrand(brandDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public BrandDTO getBrand(@PathVariable Long id){return brandService.readBrand(id);}

    @PutMapping
    public ResponseEntity<?> modifyBrand(@RequestBody BrandDTO brandDTO){
        brandService.modifyBrand(brandDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeBrand(@PathVariable Long id) {
        brandService.removeBrand(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<BrandDTO> getallBrands(){
        return brandService.getAll();
    }
}

package com.grupo9.digitalBooking.music.model.controller;


import com.grupo9.digitalBooking.music.model.DTO.ImageDTO;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/images")
public class ImageController {
    @Autowired
    IImageService imageService;


    @PostMapping
    public ResponseEntity<?> createImage(@RequestBody ImageDTO imageDTO){
        imageService.createImage(imageDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ImageDTO getImage(@PathVariable Long id){
        return imageService.readImage(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyImage(@RequestBody ImageDTO imageDTO){
        imageService.modifyImage(imageDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeImage(@PathVariable Long id) {
        imageService.removeImage(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

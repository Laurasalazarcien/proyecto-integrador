package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.ImagenesDTO;
import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.service.InterfacesService.IImagenesService;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/imagenes")
public class ImagenesController {
    @Autowired
    IImagenesService imagenesService;


    @PostMapping
    public ResponseEntity<?> crearImagenes(@RequestBody ImagenesDTO imagenesDTO){
        imagenesService.crearImagen(imagenesDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ImagenesDTO getImagenes (@PathVariable Long id){
        return imagenesService.leerImagen(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarImagen (@RequestBody ImagenesDTO imagenesDTO){
        imagenesService.modificarImagen(imagenesDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarImagen(@PathVariable Long id) {
        imagenesService.eliminarImagen(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

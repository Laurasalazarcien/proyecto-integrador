package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.CategoriaDTO;
import grupo9.demo.model.service.InterfacesService.ICategoriaServicie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    ICategoriaServicie categoriaServicie;


    @PostMapping
    public ResponseEntity<?> crearCategoria(@RequestBody CategoriaDTO categoriaDTO){
        categoriaServicie.crearCategoria(categoriaDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public CategoriaDTO getCategoria (@PathVariable Long id){
        return categoriaServicie.leerCategoria(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarCategoria (@RequestBody CategoriaDTO categoriaDTO){
        categoriaServicie.modificarCategoria(categoriaDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Long id) {
        categoriaServicie.eliminarCategoria(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<CategoriaDTO> getallCategories(){
        return categoriaServicie.getTodos();
    }

}

package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.CategoryDTO;
import grupo9.demo.model.service.InterfacesService.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    ICategoryService categoryService;


    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody CategoryDTO categoryDTO){
        categoryService.createCategory(categoryDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public CategoryDTO getCategory(@PathVariable Long id){
        return categoryService.readCategory(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyCategory(@RequestBody CategoryDTO categoryDTO){
        categoryService.modifyCategory(categoryDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeCategory(@PathVariable Long id) {
        categoryService.removeCategory(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<CategoryDTO> getallCategories(){
        return categoryService.getAll();
    }

}

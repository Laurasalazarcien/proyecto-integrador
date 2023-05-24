package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    IUsuariosService usuariosService;


    @PostMapping
    public ResponseEntity<?> crearUsuario(@RequestBody UsuarioDTO usuarioDTO){
        usuariosService.crearUsuario(usuarioDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public UsuarioDTO getUsuario (@PathVariable Long id){
        return usuariosService.leerUsuarios(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarUsuario (@RequestBody UsuarioDTO usuarioDTO){
        usuariosService.modificarUsuario(usuarioDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarUsuario(@PathVariable Long id) {
        usuariosService.eliminarUsuarios(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<UsuarioDTO> getallUsers(){
        return usuariosService.getTodos();
    }
}

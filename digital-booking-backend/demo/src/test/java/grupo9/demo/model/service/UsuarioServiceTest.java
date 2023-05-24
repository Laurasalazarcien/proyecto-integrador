package grupo9.demo.model;

import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest

class UsuarioServiceTest {

    @Autowired
    private IUsuariosService usuariosService;
    @Test
    public void testCrearUsuario(){

        UsuarioDTO usuarioDTO =new UsuarioDTO();
        usuarioDTO.setNombre("Nico");
        usuarioDTO.setApellido("Montes2");
        usuariosService.crearUsuario(usuarioDTO);

        UsuarioDTO usuarioPruebaNico = usuariosService.leerUsuarios(2L);
        assertTrue(usuarioPruebaNico != null);
    }

}
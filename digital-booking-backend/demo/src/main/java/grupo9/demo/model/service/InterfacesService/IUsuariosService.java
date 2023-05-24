package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.DTO.UsuarioDTO;

import java.util.Set;

public interface IUsuariosService {
    void crearUsuario (UsuarioDTO usuarioDTO);
    UsuarioDTO leerUsuarios (Long id);
    void modificarUsuario (UsuarioDTO usuarioDTO);
    void eliminarUsuarios (Long id);
    Set<UsuarioDTO> getTodos ();
}

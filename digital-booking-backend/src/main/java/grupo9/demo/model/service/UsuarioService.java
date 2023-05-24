package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.UsuarioDTO;
import grupo9.demo.model.entities.Usuario;
import grupo9.demo.model.repository.IUsuarios;
import grupo9.demo.model.service.InterfacesService.IUsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UsuarioService implements IUsuariosService {

    @Autowired
    private IUsuarios usuariosRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarUsuario (UsuarioDTO usuarioDTO){
        Usuario usuario =mapper.convertValue(usuarioDTO, Usuario.class);
        usuariosRepository.save(usuario);
    }



    @Override
    public void crearUsuario(UsuarioDTO usuarioDTO) {
        guardarUsuario(usuarioDTO);
    }

    @Override
    public UsuarioDTO leerUsuarios(Long id) {
        Optional<Usuario> usuario = usuariosRepository.findById(id);
        UsuarioDTO usuarioDTO = null;
        if(usuario.isPresent())
            usuarioDTO = mapper.convertValue(usuario, UsuarioDTO.class);

        return usuarioDTO;
    }

    @Override
    public void modificarUsuario(UsuarioDTO usuarioDTO) {
        guardarUsuario(usuarioDTO);
    }

    @Override
    public void eliminarUsuarios(Long id) {
        usuariosRepository.deleteById(id);
    }

    @Override
    public Set<UsuarioDTO> getTodos() {
        List<Usuario> usuarios = usuariosRepository.findAll();
        Set<UsuarioDTO>usuarioDTOS = new HashSet<>();

        for (Usuario usuario: usuarios) {
            usuarioDTOS.add(mapper.convertValue(usuario, UsuarioDTO.class));
        }

        return usuarioDTOS;

    }
}

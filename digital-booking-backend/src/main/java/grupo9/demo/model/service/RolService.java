package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.RolDTO;
import grupo9.demo.model.entities.Rol;
import grupo9.demo.model.repository.IRol;
import grupo9.demo.model.service.InterfacesService.IRolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RolService implements IRolService {

    @Autowired
    private IRol rolRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveRol(RolDTO rolDTO){
        Rol rol =mapper.convertValue(rolDTO, Rol.class);
        rolRepository.save(rol);
    }

    @Override
    public void createRol(RolDTO rolDTO) {
        saveRol(rolDTO);
    }

    @Override
    public RolDTO readRol(Long id) {
        Optional<Rol> rol = rolRepository.findById(id);
        RolDTO rolDTO = null;
        if(rol.isPresent())
            rolDTO = mapper.convertValue(rol, RolDTO.class);

        return rolDTO;
    }

    @Override
    public void modifyRol(RolDTO rolDTO) {
        saveRol(rolDTO);
    }

    @Override
    public void removeRol(Long id) {
        rolRepository.deleteById(id);
    }
}

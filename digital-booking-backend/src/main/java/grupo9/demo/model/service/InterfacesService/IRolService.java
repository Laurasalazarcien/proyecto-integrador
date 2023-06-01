package grupo9.demo.model.service.InterfacesService;


import grupo9.demo.model.DTO.RolDTO;

import java.util.Set;

public interface IRolService {

    void createRol(RolDTO rolDTO);
    RolDTO readRol(Long id);
    void modifyRol(RolDTO rolDTO);
    void removeRol(Long id);
    Set<RolDTO> getAll();
}

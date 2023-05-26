package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.RolDTO;

public interface IRolService {

    void createRol(RolDTO rolDTO);
    RolDTO readRol(Long id);
    void modifyRol(RolDTO rolDTO);
    void removeRol(Long id);
}

package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.DTO.RolDTO;

import java.util.Set;

public interface IRolService {

    void crearRol (RolDTO rolDTO);
    RolDTO leerRol (Long id);
    void modificarRol (RolDTO rolDTO);
    void eliminarRol (Long id);
}

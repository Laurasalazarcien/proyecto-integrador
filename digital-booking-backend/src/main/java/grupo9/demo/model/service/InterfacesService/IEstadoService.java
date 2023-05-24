package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.DetalleInstrumentoDTO;
import grupo9.demo.model.DTO.EstadoDTO;

import java.util.Set;

public interface IEstadoService {
    void crearEstado (EstadoDTO estadoDTO);
    EstadoDTO leerEstado (Long id);
    void modificarEstado (EstadoDTO  estadoDTO);
    void eliminarEstado (Long id);

}

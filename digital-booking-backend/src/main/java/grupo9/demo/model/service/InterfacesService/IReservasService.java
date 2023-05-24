package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.DTO.ReservasDTO;

import java.util.Set;

public interface IReservasService {

    void creareReservas (ReservasDTO reservasDTO);
    ReservasDTO leerReservas (Long id);
    void modificarReservas (ReservasDTO reservasDTO);
    void eliminarReservas (Long id);
    Set<ReservasDTO> getTodos ();
}

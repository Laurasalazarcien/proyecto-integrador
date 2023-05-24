package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.CategoriaDTO;
import grupo9.demo.model.DTO.DetalleInstrumentoDTO;

import java.util.Set;

public interface IDetalleInstrumentoService {

    void crearDetalleInstrumento (DetalleInstrumentoDTO detalleInstrumentoDTO);
    DetalleInstrumentoDTO leerDetalleInstrumento (Long id);
    void modificarDetalle (DetalleInstrumentoDTO detalleInstrumentoDTO);
    void eliminarDetalle (Long id);
    Set<DetalleInstrumentoDTO> getTodos ();


}

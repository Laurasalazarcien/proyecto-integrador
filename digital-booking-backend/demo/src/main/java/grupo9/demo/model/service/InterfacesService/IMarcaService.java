package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.DTO.MarcaDTO;

import java.util.Set;

public interface IMarcaService {
    void creareMarca (MarcaDTO marcaDTO);
    MarcaDTO leerMarcas (Long id);
    void modificarMarcas (MarcaDTO marcaDTO);
    void eliminarMarca (Long id);
    Set<MarcaDTO> getTodos ();
}

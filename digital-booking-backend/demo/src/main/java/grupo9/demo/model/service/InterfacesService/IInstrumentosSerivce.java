package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentosDTO;

import java.util.Set;

public interface IInstrumentosSerivce {

    void creareInstrumentos (InstrumentosDTO instrumentosDTO);
    InstrumentosDTO leerInstrumentos (Long id);
    void modificarInstrumentos (InstrumentosDTO  instrumentosDTO);
    void eliminarInstrumentos (Long id);
    Set<InstrumentosDTO> getTodos ();
}

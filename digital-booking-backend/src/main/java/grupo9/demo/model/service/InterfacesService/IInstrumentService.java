package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentDTO;

import java.util.Set;

public interface IInstrumentService {

    void createInstrument(InstrumentDTO instrumentDTO);
    InstrumentDTO readInstrument(Long id);
    void modifyInstrument(InstrumentDTO instrumentDTO);
    void removeInstrument(Long id);
    Set<InstrumentDTO> getAll();
}

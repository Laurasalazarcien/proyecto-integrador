package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.InstrumentDetailDTO;

import java.util.Set;

public interface IDetailInstrumentService {

    void createInstrumentDetail(InstrumentDetailDTO instrumentDetailDTO);
    InstrumentDetailDTO readInstrumentDetail(Long id);
    void modifyDetail(InstrumentDetailDTO instrumentDetailDTO);
    void removeDetail(Long id);
    Set<InstrumentDetailDTO> getAll();


}

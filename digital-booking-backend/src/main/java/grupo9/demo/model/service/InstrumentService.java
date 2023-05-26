package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.InstrumentDTO;
import grupo9.demo.model.entities.Instrument;
import grupo9.demo.model.repository.IInstrument;
import grupo9.demo.model.service.InterfacesService.IInstrumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class InstrumentService implements IInstrumentService {

    @Autowired
    private IInstrument instrumentRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveInstrument(InstrumentDTO instrumentDTO){
        Instrument instrument =mapper.convertValue(instrumentDTO, Instrument.class);
        instrumentRepository.save(instrument);
    }

    @Override
    public void createInstrument(InstrumentDTO instrumentDTO) {
        saveInstrument(instrumentDTO);
    }

    @Override
    public InstrumentDTO readInstrument(Long id) {
        Optional<Instrument> instrument = instrumentRepository.findById(id);
        InstrumentDTO instrumentDTO = null;
        if(instrument.isPresent())
            instrumentDTO = mapper.convertValue(instrument, InstrumentDTO.class);
        return instrumentDTO;
    }

    @Override
    public void modifyInstrument(InstrumentDTO instrumentDTO) {
        saveInstrument(instrumentDTO);
    }

    @Override
    public void removeInstrument(Long id) {

    }

    @Override
    public Set<InstrumentDTO> getAll() {
        List<Instrument> instruments = instrumentRepository.findAll();
        Set<InstrumentDTO> instrumentDTOS = new HashSet<>();

        for (Instrument instrument1 : instruments) {
            instrumentDTOS.add(mapper.convertValue(instrument1, InstrumentDTO.class));
        }
        return instrumentDTOS;
    }
}

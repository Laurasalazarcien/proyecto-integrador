package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.InstrumentosDTO;
import grupo9.demo.model.entities.Instrumentos;
import grupo9.demo.model.repository.IInstrumentos;
import grupo9.demo.model.service.InterfacesService.IInstrumentosSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class InstrumentosService implements IInstrumentosSerivce {

    @Autowired
    private IInstrumentos instrumentosRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarInstrumentos (InstrumentosDTO instrumentosDTO){
        Instrumentos instrumentos =mapper.convertValue(instrumentosDTO, Instrumentos.class);
        instrumentosRepository.save(instrumentos);
    }

    @Override
    public void creareInstrumentos(InstrumentosDTO instrumentosDTO) {
        guardarInstrumentos(instrumentosDTO);
    }

    @Override
    public InstrumentosDTO leerInstrumentos(Long id) {
        Optional<Instrumentos> instrumentos = instrumentosRepository.findById(id);
        InstrumentosDTO instrumentosDTO = null;
        if(instrumentos.isPresent())
            instrumentosDTO = mapper.convertValue(instrumentos, InstrumentosDTO.class);
        return instrumentosDTO;
    }

    @Override
    public void modificarInstrumentos(InstrumentosDTO instrumentosDTO) {
        guardarInstrumentos(instrumentosDTO);
    }

    @Override
    public void eliminarInstrumentos(Long id) {

    }

    @Override
    public Set<InstrumentosDTO> getTodos() {
        List<Instrumentos> instrumentos = instrumentosRepository.findAll();
        Set<InstrumentosDTO> instrumentosDTOS = new HashSet<>();

        for (Instrumentos instrumentos1: instrumentos) {
            instrumentosDTOS.add(mapper.convertValue(instrumentos1, InstrumentosDTO.class));
        }
        return instrumentosDTOS;
    }
}

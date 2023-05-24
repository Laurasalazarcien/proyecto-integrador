package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.DetalleInstrumentoDTO;
import grupo9.demo.model.entities.DetalleInstrumento;
import grupo9.demo.model.repository.IDetalleInstrumento;
import grupo9.demo.model.service.InterfacesService.IDetalleInstrumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class DetalleInstrumentoService implements IDetalleInstrumentoService {

    @Autowired
    private IDetalleInstrumento detalleInstrumentoRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarDetlalle (DetalleInstrumentoDTO detalleInstrumentoDTO){
        DetalleInstrumento detalleInstrumento =mapper.convertValue(detalleInstrumentoDTO, DetalleInstrumento.class);
        detalleInstrumentoRepository.save(detalleInstrumento);
    }

    @Override
    public void crearDetalleInstrumento(DetalleInstrumentoDTO detalleInstrumentoDTO) {
        guardarDetlalle(detalleInstrumentoDTO);
    }

    @Override
    public DetalleInstrumentoDTO leerDetalleInstrumento(Long id) {
        Optional<DetalleInstrumento> detalleInstrumento = detalleInstrumentoRepository.findById(id);
        DetalleInstrumentoDTO detalleInstrumentoDTO = null;
        if(detalleInstrumento.isPresent())
            detalleInstrumentoDTO = mapper.convertValue(detalleInstrumento, DetalleInstrumentoDTO.class);

        return detalleInstrumentoDTO;
    }


    @Override
    public void modificarDetalle(DetalleInstrumentoDTO detalleInstrumentoDTO) {
        guardarDetlalle(detalleInstrumentoDTO);
    }

    @Override
    public void eliminarDetalle(Long id) {
        detalleInstrumentoRepository.deleteById(id);
    }

    @Override
    public Set<DetalleInstrumentoDTO> getTodos() {
        List<DetalleInstrumento> detalleInstrumentos = detalleInstrumentoRepository.findAll();
        Set<DetalleInstrumentoDTO> detalleInstrumentoDTOS = new HashSet<>();

        for (DetalleInstrumento detalleInstrumento: detalleInstrumentos) {
            detalleInstrumentoDTOS.add(mapper.convertValue(detalleInstrumento,DetalleInstrumentoDTO.class));
        }

        return detalleInstrumentoDTOS;

    }

}

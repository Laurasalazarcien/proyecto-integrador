package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.EstadoDTO;
import grupo9.demo.model.entities.Estado;
import grupo9.demo.model.repository.IEstado;
import grupo9.demo.model.service.InterfacesService.IEstadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EstadoService implements IEstadoService {

    @Autowired
    private IEstado estadoRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarEstado (EstadoDTO estadoDTO){
        Estado estado =mapper.convertValue(estadoDTO, Estado.class);
        estadoRepository.save(estado);
    }

    @Override
    public void crearEstado(EstadoDTO estadoDTO) {
        guardarEstado(estadoDTO);
    }

    @Override
    public EstadoDTO leerEstado(Long id) {
        Optional<Estado> estado = estadoRepository.findById(id);
        EstadoDTO estadoDTO = null;
        if(estado.isPresent())
            estadoDTO = mapper.convertValue(estado, EstadoDTO.class);
        return estadoDTO;
    }

    @Override
    public void modificarEstado(EstadoDTO estadoDTO) {
        guardarEstado(estadoDTO);
    }

    @Override
    public void eliminarEstado(Long id) {
        estadoRepository.deleteById(id);
    }

}

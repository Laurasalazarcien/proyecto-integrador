package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.MarcaDTO;
import grupo9.demo.model.entities.Marca;
import grupo9.demo.model.repository.IMarca;
import grupo9.demo.model.service.InterfacesService.IMarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class MarcaService implements IMarcaService {

    @Autowired
    private IMarca marcaRepository;

    @Autowired
    ObjectMapper mapper;


    private void guardarMarca (MarcaDTO marcaDTO){
        Marca marca =mapper.convertValue(marcaDTO, Marca.class);
        marcaRepository.save(marca);
    }

    @Override
    public void creareMarca(MarcaDTO marcaDTO) {
        guardarMarca(marcaDTO);
    }

    @Override
    public MarcaDTO leerMarcas(Long id) {
        Optional<Marca> marca = marcaRepository.findById(id);
        MarcaDTO marcaDTO = null;
        if(marca.isPresent())
            marcaDTO = mapper.convertValue(marca, MarcaDTO.class);

        return marcaDTO;
    }

    @Override
    public void modificarMarcas(MarcaDTO marcaDTO) {
        guardarMarca(marcaDTO);
    }

    @Override
    public void eliminarMarca(Long id) {
        marcaRepository.deleteById(id);
    }

    @Override
    public Set<MarcaDTO> getTodos() {
        return null;
    }
}

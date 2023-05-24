package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.ImagenesDTO;
import grupo9.demo.model.entities.Imagenes;
import grupo9.demo.model.repository.IImagenes;
import grupo9.demo.model.service.InterfacesService.IImagenesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImagenesService implements IImagenesService {

    @Autowired
    private  IImagenes imagenesRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarImagenes (ImagenesDTO imagenesDTO){
        Imagenes imagenes =mapper.convertValue(imagenesDTO, Imagenes.class);
        imagenesRepository.save(imagenes);
    }

    @Override
    public void crearImagen(ImagenesDTO imagenesDTO) {
        guardarImagenes(imagenesDTO);
    }

    @Override
    public ImagenesDTO leerImagen(Long id) {
        Optional<Imagenes> imagenes = imagenesRepository.findById(id);
        ImagenesDTO imagenesDTO = null;
        if(imagenes.isPresent())
            imagenesDTO = mapper.convertValue(imagenes, ImagenesDTO.class);
        return imagenesDTO;
    }

    @Override
    public void modificarImagen(ImagenesDTO imagenesDTO) {
        guardarImagenes(imagenesDTO);
    }

    @Override
    public void eliminarImagen(Long id) {
        imagenesRepository.deleteById(id);
    }
}

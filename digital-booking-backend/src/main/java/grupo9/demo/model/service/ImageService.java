package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.ImageDTO;
import grupo9.demo.model.entities.Image;
import grupo9.demo.model.repository.IImage;
import grupo9.demo.model.service.InterfacesService.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageService implements IImageService {

    @Autowired
    private IImage imagenesRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarImagenes (ImageDTO imageDTO){
        Image image =mapper.convertValue(imageDTO, Image.class);
        imagenesRepository.save(image);
    }

    @Override
    public void createImage(ImageDTO imageDTO) {
        guardarImagenes(imageDTO);
    }

    @Override
    public ImageDTO readImage(Long id) {
        Optional<Image> imagenes = imagenesRepository.findById(id);
        ImageDTO imageDTO = null;
        if(imagenes.isPresent())
            imageDTO = mapper.convertValue(imagenes, ImageDTO.class);
        return imageDTO;
    }

    @Override
    public void modifyImage(ImageDTO imageDTO) {
        guardarImagenes(imageDTO);
    }

    @Override
    public void removeImage(Long id) {
        imagenesRepository.deleteById(id);
    }
}

package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.ImageDTO;
import com.grupo9.digitalBooking.music.model.entities.Image;
import com.grupo9.digitalBooking.music.model.repository.IImage;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ImageService implements IImageService {

    @Autowired
    private IImage imageRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveImage(ImageDTO imageDTO){
        Image image =mapper.convertValue(imageDTO, Image.class);
        imageRepository.save(image);
    }

    @Override
    public void createImage(ImageDTO imageDTO) {
        saveImage(imageDTO);
    }

    @Override
    public ImageDTO readImage(Long id) {
        Optional<Image> image = imageRepository.findById(id);
        ImageDTO imageDTO = null;
        if(image.isPresent())
            imageDTO = mapper.convertValue(image, ImageDTO.class);
        return imageDTO;
    }

    @Override
    public void modifyImage(ImageDTO imageDTO) {
        saveImage(imageDTO);
    }

    @Override
    public void removeImage(Long id) {
        imageRepository.deleteById(id);
    }
}

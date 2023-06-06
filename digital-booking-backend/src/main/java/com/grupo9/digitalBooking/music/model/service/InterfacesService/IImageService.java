package com.grupo9.digitalBooking.music.model.service.InterfacesService;


import com.grupo9.digitalBooking.music.model.DTO.ImageDTO;

public interface IImageService {
    void createImage(ImageDTO imageDTO);
    ImageDTO readImage(Long id);
    void modifyImage(ImageDTO imageDTO);
    void removeImage(Long id);

}

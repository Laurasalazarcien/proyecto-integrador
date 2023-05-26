package grupo9.demo.model.service.InterfacesService;


import grupo9.demo.model.DTO.ImageDTO;

public interface IImageService {
    void createImage(ImageDTO imageDTO);
    ImageDTO readImage(Long id);
    void modifyImage(ImageDTO imageDTO);
    void removeImage(Long id);

}

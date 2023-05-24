package grupo9.demo.model.service.InterfacesService;


import grupo9.demo.model.DTO.ImagenesDTO;

public interface IImagenesService {
    void crearImagen (ImagenesDTO imagenesDTO);
    ImagenesDTO leerImagen(Long id);
    void modificarImagen (ImagenesDTO  imagenesDTO);
    void eliminarImagen (Long id);

}

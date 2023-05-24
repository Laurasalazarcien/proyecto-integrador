package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.CategoriaDTO;

import java.util.Set;

public interface ICategoriaServicie {

    void crearCategoria (CategoriaDTO categoriaDTO);
    CategoriaDTO leerCategoria (Long id);
    void modificarCategoria (CategoriaDTO categoriaDTO);
    void eliminarCategoria (Long id);
    Set<CategoriaDTO> getTodos ();

}

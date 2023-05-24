package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.entities.Categoria;
import grupo9.demo.model.DTO.CategoriaDTO;
import grupo9.demo.model.repository.ICategoria;
import grupo9.demo.model.service.InterfacesService.ICategoriaServicie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoriaService implements ICategoriaServicie {

    @Autowired
    private ICategoria categoriaRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void crearCategoria(CategoriaDTO categoriaDTO) {
        guardarCategoria(categoriaDTO);
    }

    @Override
    public CategoriaDTO leerCategoria(Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        CategoriaDTO categoriaDTO = null;
        if(categoria.isPresent())
            categoriaDTO = mapper.convertValue(categoria, CategoriaDTO.class);

        return categoriaDTO;
    }

    private void guardarCategoria (CategoriaDTO categoriaDTO){
        Categoria categoria =mapper.convertValue(categoriaDTO, Categoria.class);
        categoriaRepository.save(categoria);
    }
    @Override
    public void modificarCategoria(CategoriaDTO categoriaDTO) {
        guardarCategoria(categoriaDTO);
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);
    }

    @Override
    public Set<CategoriaDTO> getTodos() {
        List<Categoria> categorias = categoriaRepository.findAll();
        Set<CategoriaDTO> categoriaDTO = new HashSet<>();

        for (Categoria categoria: categorias) {
            categoriaDTO.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }

        return categoriaDTO;

    }
}

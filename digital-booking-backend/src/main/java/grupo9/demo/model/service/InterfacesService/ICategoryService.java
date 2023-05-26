package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.CategoryDTO;

import java.util.Set;

public interface ICategoryService {

    void createCategory(CategoryDTO categoryDTO);
    CategoryDTO readCategory(Long id);
    void modifyCategory(CategoryDTO categoryDTO);
    void removeCategory(Long id);
    Set<CategoryDTO> getAll();

}

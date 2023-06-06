package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.CategoryDTO;

import java.util.Set;

public interface ICategoryService {

    void createCategory(CategoryDTO categoryDTO);
    CategoryDTO readCategory(Long id);
    void modifyCategory(CategoryDTO categoryDTO);
    void removeCategory(Long id);
    Set<CategoryDTO> getAll();

}

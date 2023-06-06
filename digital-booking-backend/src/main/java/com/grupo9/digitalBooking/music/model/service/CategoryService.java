package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.entities.Category;
import com.grupo9.digitalBooking.music.model.DTO.CategoryDTO;
import com.grupo9.digitalBooking.music.model.repository.ICategory;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategory categoryRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createCategory(CategoryDTO categoryDTO) {
        saveCategory(categoryDTO);
    }

    @Override
    public CategoryDTO readCategory(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        CategoryDTO categoryDTO = null;
        if(category.isPresent())
            categoryDTO = mapper.convertValue(category, CategoryDTO.class);

        return categoryDTO;
    }

    private void saveCategory(CategoryDTO categoryDTO){
        Category category =mapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);
    }
    @Override
    public void modifyCategory(CategoryDTO categoryDTO) {
        saveCategory(categoryDTO);
    }

    @Override
    public void removeCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public Set<CategoryDTO> getAll() {
        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoryDTO = new HashSet<>();

        for (Category category : categories) {
            categoryDTO.add(mapper.convertValue(category, CategoryDTO.class));
        }

        return categoryDTO;

    }
}

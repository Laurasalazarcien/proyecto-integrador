package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.repository.IBrand;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IBrandService;
import com.grupo9.digitalBooking.music.model.DTO.BrandDTO;
import com.grupo9.digitalBooking.music.model.entities.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BrandService implements IBrandService {

    @Autowired
    private IBrand brandRepository;

    @Autowired
    ObjectMapper mapper;


    private void saveBrand(BrandDTO brandDTO){
        Brand brand =mapper.convertValue(brandDTO, Brand.class);
        brandRepository.save(brand);
    }

    @Override
    public void createBrand(BrandDTO brandDTO) {
        saveBrand(brandDTO);
    }

    @Override
    public BrandDTO readBrand(Long id) {
        Optional<Brand> brand = brandRepository.findById(id);
        BrandDTO brandDTO = null;
        if(brand.isPresent())
            brandDTO = mapper.convertValue(brand, BrandDTO.class);

        return brandDTO;
    }

    @Override
    public void modifyBrand(BrandDTO brandDTO) {
        saveBrand(brandDTO);
    }

    @Override
    public void removeBrand(Long id) {
        brandRepository.deleteById(id);
    }

    @Override
    public Set<BrandDTO> getAll() {
        List<Brand> brands = brandRepository.findAll();
        Set<BrandDTO> brandDTO = new HashSet<>();

        brands.forEach(brand -> brandDTO.add(mapper.convertValue(brand, BrandDTO.class)));
        return brandDTO;
    }
}

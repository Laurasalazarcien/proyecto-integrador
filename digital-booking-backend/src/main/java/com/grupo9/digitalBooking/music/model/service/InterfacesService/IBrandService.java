package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.BrandDTO;

import java.util.Set;

public interface IBrandService {
    void createBrand(BrandDTO brandDTO);
    BrandDTO readBrand(Long id);
    void modifyBrand(BrandDTO brandDTO);
    void removeBrand(Long id);
    Set<BrandDTO> getAll();
}

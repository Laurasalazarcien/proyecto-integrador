package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.BrandDTO;

import java.util.Set;

public interface IBrandService {
    void createBrand(BrandDTO brandDTO);
    BrandDTO readBrand(Long id);
    void modifyBrand(BrandDTO brandDTO);
    void removeBrand(Long id);
    Set<BrandDTO> getAll();
}

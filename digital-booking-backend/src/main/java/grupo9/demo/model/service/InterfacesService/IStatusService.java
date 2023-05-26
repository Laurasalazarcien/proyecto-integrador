package grupo9.demo.model.service.InterfacesService;

import grupo9.demo.model.DTO.StatusDTO;

public interface IStatusService {
    void createStatus(StatusDTO statusDTO);
    StatusDTO readStatus(Long id);
    void modifyStatus(StatusDTO statusDTO);
    void removeStatus(Long id);

}

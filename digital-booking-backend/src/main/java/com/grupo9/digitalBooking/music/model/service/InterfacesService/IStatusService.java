package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.StatusDTO;

public interface IStatusService {
    void createStatus(StatusDTO statusDTO);
    StatusDTO readStatus(Long id);
    void modifyStatus(StatusDTO statusDTO);
    void removeStatus(Long id);

}

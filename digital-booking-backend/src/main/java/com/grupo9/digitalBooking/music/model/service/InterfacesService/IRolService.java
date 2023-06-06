package com.grupo9.digitalBooking.music.model.service.InterfacesService;


import com.grupo9.digitalBooking.music.model.DTO.RolDTO;

import java.util.Set;

public interface IRolService {

    Boolean createRol(RolDTO rolDTO);
    RolDTO readRol(Long id);
    Boolean modifyRol(RolDTO rolDTO);
    void removeRol(Long id);
    Set<RolDTO> getAll();
}

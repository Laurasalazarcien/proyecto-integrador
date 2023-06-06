package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IRolService;
import com.grupo9.digitalBooking.music.model.DTO.RolDTO;
import com.grupo9.digitalBooking.music.model.entities.Rol;
import com.grupo9.digitalBooking.music.model.repository.IRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.logging.Logger;

@Service
public class RolService implements IRolService {

    private static final Logger LOGGER = Logger.getLogger(String.valueOf(RolService.class));


    @Autowired
    private IRol rolRepository;

    @Autowired
    ObjectMapper mapper;

    /**
     * Realiza la acción de guardar y actualizar
     *
     * */
    private void saveRol(RolDTO rolDTO){
        Rol rol = mapper.convertValue(rolDTO, Rol.class);
        rolRepository.save(rol);
    }

    @Override
    public Boolean createRol(RolDTO rolDTO) {
        Boolean response = false;
        Boolean existRol = rolRepository.findByName(rolDTO.getName()).isPresent();
        if(!existRol) {
            // rolRepository.save(mapper.convertValue(rolDTO, Rol.class));
            saveRol(rolDTO);
            response = true;
        }
        LOGGER.info("existe: " + existRol);
        return response;
    }


    public Set<RolDTO> getAll() {
        List<Rol> rols = rolRepository.findAll();
        Set<RolDTO> rolDTOS = new HashSet<>();

        for (Rol rol1 : rols) {
            rolDTOS.add(mapper.convertValue(rol1, RolDTO.class));
        }
        return rolDTOS;
    }


    @Override
    public RolDTO readRol(Long id) {
        Optional<Rol> rol = rolRepository.findById(id);
        RolDTO rolDTO = null;
        if(rol.isPresent())
            rolDTO = mapper.convertValue(rol, RolDTO.class);

        return rolDTO;
    }

    @Override
    public Boolean modifyRol(RolDTO rolDTO) {

        LOGGER.info("Update Rol..." + " - " + rolDTO.getId());
        Boolean response = false;
        Boolean validateRol = rolRepository.findById(rolDTO.getId()).isPresent();

        if(validateRol) {
            response = true;
            saveRol(rolDTO);
        }
        return response;
    }

    @Override
    public void removeRol(Long id) {
        rolRepository.deleteById(id);
    }

}

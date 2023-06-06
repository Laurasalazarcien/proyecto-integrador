package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.StatusDTO;
import com.grupo9.digitalBooking.music.model.entities.Status;
import com.grupo9.digitalBooking.music.model.repository.IStatus;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StatusService implements IStatusService {

    @Autowired
    private IStatus statusRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveStatus(StatusDTO statusDTO){
        Status status =mapper.convertValue(statusDTO, Status.class);
        statusRepository.save(status);
    }

    @Override
    public void createStatus(StatusDTO statusDTO) {
        saveStatus(statusDTO);
    }

    @Override
    public StatusDTO readStatus(Long id) {
        Optional<Status> status = statusRepository.findById(id);
        StatusDTO statusDTO = null;
        if(status.isPresent())
            statusDTO = mapper.convertValue(status, StatusDTO.class);
        return statusDTO;
    }

    @Override
    public void modifyStatus(StatusDTO statusDTO) {
        saveStatus(statusDTO);
    }

    @Override
    public void removeStatus(Long id) {
        statusRepository.deleteById(id);
    }

}

package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IDetailInstrumentService;
import com.grupo9.digitalBooking.music.model.DTO.InstrumentDetailDTO;
import com.grupo9.digitalBooking.music.model.entities.InstrumentDetail;
import com.grupo9.digitalBooking.music.model.repository.IInstrumentDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class InstrumentDetailService implements IDetailInstrumentService {

    @Autowired
    private IInstrumentDetail instrumentDetailRepository;

    @Autowired
    ObjectMapper mapper;

    private void saveDetail(InstrumentDetailDTO instrumentDetailDTO){
        InstrumentDetail instrumentDetail =mapper.convertValue(instrumentDetailDTO, InstrumentDetail.class);
        instrumentDetailRepository.save(instrumentDetail);
    }

    @Override
    public void createInstrumentDetail(InstrumentDetailDTO instrumentDetailDTO) {
        saveDetail(instrumentDetailDTO);
    }

    @Override
    public InstrumentDetailDTO readInstrumentDetail(Long id) {
        Optional<InstrumentDetail> instrumentDetail = instrumentDetailRepository.findById(id);
        InstrumentDetailDTO instrumentDetailDTO = null;
        if(instrumentDetail.isPresent())
            instrumentDetailDTO = mapper.convertValue(instrumentDetail, InstrumentDetailDTO.class);

        return instrumentDetailDTO;
    }


    @Override
    public void modifyDetail(InstrumentDetailDTO instrumentDetailDTO) {
        saveDetail(instrumentDetailDTO);
    }

    @Override
    public void removeDetail(Long id) {
        instrumentDetailRepository.deleteById(id);
    }

    @Override
    public Set<InstrumentDetailDTO> getAll() {
        List<InstrumentDetail> instrumentDetails = instrumentDetailRepository.findAll();
        Set<InstrumentDetailDTO> instrumentDetailDTOS = new HashSet<>();

        for (InstrumentDetail instrumentDetail : instrumentDetails) {
            instrumentDetailDTOS.add(mapper.convertValue(instrumentDetail, InstrumentDetailDTO.class));
        }

        return instrumentDetailDTOS;

    }

}

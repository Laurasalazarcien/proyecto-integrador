package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.InstrumentDetailDTO;

import java.util.Set;

public interface IDetailInstrumentService {

    void createInstrumentDetail(InstrumentDetailDTO instrumentDetailDTO);
    InstrumentDetailDTO readInstrumentDetail(Long id);
    void modifyDetail(InstrumentDetailDTO instrumentDetailDTO);
    void removeDetail(Long id);
    Set<InstrumentDetailDTO> getAll();


}

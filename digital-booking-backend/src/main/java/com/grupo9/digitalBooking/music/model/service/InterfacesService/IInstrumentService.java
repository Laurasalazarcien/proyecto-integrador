package com.grupo9.digitalBooking.music.model.service.InterfacesService;

import com.grupo9.digitalBooking.music.model.DTO.InstrumentDTO;

import java.util.Set;

public interface IInstrumentService {

    void createInstrument(InstrumentDTO instrumentDTO);
    InstrumentDTO readInstrument(Long id);
    void modifyInstrument(InstrumentDTO instrumentDTO);
    void removeInstrument(Long id);
    Set<InstrumentDTO> getAll();
}

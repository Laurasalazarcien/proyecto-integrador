package com.grupo9.digitalBooking.music.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo9.digitalBooking.music.model.DTO.CategoryDTO;
import com.grupo9.digitalBooking.music.model.DTO.ImageDTO;
import com.grupo9.digitalBooking.music.model.entities.Category;
import com.grupo9.digitalBooking.music.model.entities.Image;
import com.grupo9.digitalBooking.music.model.repository.IImage;
import com.grupo9.digitalBooking.music.model.repository.IInstrument;
import com.grupo9.digitalBooking.music.model.service.InterfacesService.IInstrumentService;
import com.grupo9.digitalBooking.music.model.DTO.InstrumentDTO;
import com.grupo9.digitalBooking.music.model.entities.Instrument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.logging.Logger;

@Service
public class InstrumentService implements IInstrumentService {

    @Autowired
    private IInstrument instrumentRepository;

    @Autowired
    private IImage imageRepository;
    @Autowired
    ObjectMapper mapper;

    private static final Logger LOGGER = Logger.getLogger(String.valueOf(InstrumentService.class));


    private InstrumentDTO saveInstrument(InstrumentDTO instrumentDTO){
        Instrument instrument =mapper.convertValue(instrumentDTO, Instrument.class);
        return mapper.convertValue(instrumentRepository.save(instrument), InstrumentDTO.class);
    }

    private Boolean existById(Long id) {
        return instrumentRepository.findById(id).isPresent();
    }

    @Override
    public InstrumentDTO createInstrument(InstrumentDTO instrumentDTO) {

        InstrumentDTO response = null;
        Boolean existInstrument = instrumentRepository.findByName(instrumentDTO.getName()).isPresent();

        if(!existInstrument) {
            InstrumentDTO newInstrument = saveInstrument(instrumentDTO);
            List<ImageDTO> imageDTOList = new ArrayList<>();

            instrumentDTO.getImages().forEach(imageDTO -> {
                Image image = mapper.convertValue(imageDTO, Image.class);
                image.setInstrument(mapper.convertValue(newInstrument, Instrument.class));
                image.setName(newInstrument.getName());
                imageRepository.save(image);
                imageDTOList.add(mapper.convertValue(imageRepository.save(image), ImageDTO.class));
            });
            newInstrument.setImages(imageDTOList);

            response = newInstrument;
        }

        return response;
    }

    @Override
    public InstrumentDTO readInstrument(Long id) {
        Optional<Instrument> instrument = instrumentRepository.findById(id);
        InstrumentDTO instrumentDTO = null;
        if(instrument.isPresent())
            instrumentDTO = mapper.convertValue(instrument, InstrumentDTO.class);
        return instrumentDTO;
    }

    @Override
    public void modifyInstrument(InstrumentDTO instrumentDTO) {
        saveInstrument(instrumentDTO);
    }

    @Override
    public void removeInstrument(Long id) {
        instrumentRepository.deleteById(id);
    }

    @Override
    public List<InstrumentDTO> getAll() {
        List<Instrument> instruments = instrumentRepository.findAll();
        List<InstrumentDTO> instrumentDTOS = new ArrayList<>();

        for (Instrument instrument1 : instruments) {
            instrumentDTOS.add(mapper.convertValue(instrument1, InstrumentDTO.class));
        }
        return instrumentDTOS;
    }

    @Override
    public List<InstrumentDTO> getInstrumentsByCategory(Long id) {
        // Category category = mapper.convertValue(instrumentRepository.findById(id), Category.class);
        // LOGGER.info("categoryId2: " + category);
        List<Instrument> instruments = instrumentRepository.findByCategoryId(id);
        List<InstrumentDTO> instrumentDTOList = new ArrayList<>();
        instruments.forEach(instrument -> instrumentDTOList
                .add(mapper.convertValue(instrument, InstrumentDTO.class)));

        System.out.println("===== Categorys =====");
        instrumentDTOList.forEach((instrument) -> LOGGER.info("Instrument: " + instrument));
        return instrumentDTOList;
    }
}

package com.grupo9.digitalBooking.music.model.DTO;

import com.grupo9.digitalBooking.music.model.entities.Instrument;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {


    private Long id;
    private String url;
    private Instrument instrument;

}

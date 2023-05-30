package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.Instrument;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class ImageDTO {


    private Long id;
    private String url;
    private Instrument instrument;

}

package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.Status;
import grupo9.demo.model.entities.Instrument;
import grupo9.demo.model.entities.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class BookingDTO {

    private Long id;
    private LocalDate startDate;
    private LocalDate finalDate;
    private User user;
    private Instrument instrument;
    private Status status;


}

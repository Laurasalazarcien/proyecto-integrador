package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.Status;
import grupo9.demo.model.entities.Instrument;
import grupo9.demo.model.entities.User;

import java.util.Date;

public class BookingDTO {

    private Long id;
    private Date startDate;
    private Date finalDate;
    private User user;
    private Instrument instrument;
    private Status status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinalDate() {
        return finalDate;
    }

    public void setFinalDate(Date finalDate) {
        this.finalDate = finalDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Instrument getInstrument() {
        return instrument;
    }

    public void setInstrument(Instrument instrument) {
        this.instrument = instrument;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}

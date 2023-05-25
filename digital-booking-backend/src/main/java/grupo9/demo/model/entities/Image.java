package grupo9.demo.model.entities;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import javax.persistence.*;

@Entity
@Table (name="image")

public class Image {

    @Id
    @GeneratedValue
    private Long id;
    private String url;

    @ManyToOne
    @JoinColumn(name = "instrument_id")
    private Instrument instrument;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Instrument getInstrument() {
        return instrument;
    }

    public void setInstrument(Instrument instrument) {
        this.instrument = instrument;
    }
}

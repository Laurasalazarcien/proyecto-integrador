package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.Instrument;

public class ImageDTO {

    private Long id;
    private String url;
    private Instrument instrument;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getURL() {
        return url;
    }

    public void setURL(String URL) {
        this.url = URL;
    }

    public Instrument getInstrument() {
        return instrument;
    }

    public void setInstrument(Instrument instrument) {
        this.instrument = instrument;
    }
}

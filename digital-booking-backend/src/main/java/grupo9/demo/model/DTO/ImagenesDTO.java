package grupo9.demo.model.DTO;

import grupo9.demo.model.Instrumentos;

public class ImagenesDTO {

    private Long id;
    private String URL;
    private Instrumentos instrumentos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public Instrumentos getInstrumentos() {
        return instrumentos;
    }

    public void setInstrumentos(Instrumentos instrumentos) {
        this.instrumentos = instrumentos;
    }
}

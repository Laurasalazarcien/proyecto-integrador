package grupo9.demo.model;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import javax.persistence.*;

@Entity
@Table (name="Imagenes")

public class Imagenes {

    @Id
    @GeneratedValue
    private Long id;
    private String URL;

    @ManyToOne
    @JoinColumn(name = "instrumento_id")
    private Instrumentos instrumento;

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
        return instrumento;
    }

    public void setInstrumentos(Instrumentos instrumento) {
        this.instrumento = instrumento;
    }
}

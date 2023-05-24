package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.OneToMany;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table (name="DetalleInstrumento")

public class DetalleInstrumento {

    @Id
    @GeneratedValue
    private Long id;
    private String descripcion;

    @OneToMany(mappedBy = "detalleInstrumento")
    @JsonIgnore
    private Set<Instrumentos> intrumento;

    public Set<Instrumentos> getIntrumentos() {
        return intrumento;
    }

    public void setIntrumentos(Set<Instrumentos> intrumentos) {
        this.intrumento = intrumento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}

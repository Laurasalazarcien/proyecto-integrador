package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="Marca")
public class Marca {

    @Id
    @GeneratedValue
    private Long id;
    private String nombre;

    @OneToMany(mappedBy = "marca")
    @JsonIgnore
    private Set<Instrumentos> instrumento;

    public Set<Instrumentos> getInstrumentos() {
        return instrumento;
    }

    public void setInstrumentos(Set<Instrumentos> instrumentos) {
        this.instrumento = instrumento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

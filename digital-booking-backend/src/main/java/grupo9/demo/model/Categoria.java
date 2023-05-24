package grupo9.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;
import javax.persistence.*;

@Entity
@Table (name="Categoria")
public class Categoria {

    @Id
    @GeneratedValue
    private Long id;
    private String nombre;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    private Set<Instrumentos> instrumento;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Instrumentos> getInstrumentos() {
        return instrumento;
    }

    public void setInstrumentos(Set<Instrumentos> instrumentos) {
        this.instrumento = instrumentos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

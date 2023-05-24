package grupo9.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;
import javax.persistence.*;

@Entity
@Table (name="Estados")
public class Estado {

    @Id
    @GeneratedValue
    private Long id;
    private String nombre;


    @OneToMany(mappedBy = "estado")
    @JsonIgnore
    private Set<Reservas> reservas;

    @OneToMany(mappedBy = "estado")
    @JsonIgnore
    private  Set<Instrumentos> instrumento;

    public Set<Reservas> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reservas> reservas) {
        this.reservas = reservas;
    }

    public Set<Instrumentos> getInstrumentos() {
        return instrumento;
    }

    public void setInstrumentos(Set<Instrumentos> instrumentos) {
        this.instrumento = instrumentos;
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

package grupo9.demo.model;

import java.util.Set;

public class Estado {
    
    private Long id;
    private String nombre;

    private Set<Reservas> reservas;

    private  Set<Instrumentos> instrumentos;

    public Set<Reservas> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reservas> reservas) {
        this.reservas = reservas;
    }

    public Set<Instrumentos> getInstrumentos() {
        return instrumentos;
    }

    public void setInstrumentos(Set<Instrumentos> instrumentos) {
        this.instrumentos = instrumentos;
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

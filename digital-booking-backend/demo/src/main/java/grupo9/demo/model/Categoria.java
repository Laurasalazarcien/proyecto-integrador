package grupo9.demo.model;

import java.util.Set;

public class Categoria {
    private Long id;
    private String nombre;

    private Set<Instrumentos> instrumentos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Instrumentos> getInstrumentos() {
        return instrumentos;
    }

    public void setInstrumentos(Set<Instrumentos> instrumentos) {
        this.instrumentos = instrumentos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

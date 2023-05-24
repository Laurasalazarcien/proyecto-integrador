package grupo9.demo.model;

import java.util.Set;

public class Marca {

    private Long id;
    private String nombre;

    private Set<Marca> marcas;

    public Set<Marca> getMarcas() {
        return marcas;
    }

    public void setMarcas(Set<Marca> marcas) {
        this.marcas = marcas;
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

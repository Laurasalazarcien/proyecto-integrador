package grupo9.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table (name="Instrumentos")
public class Instrumentos {

    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private Double precio;
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "categoria_id",nullable = false)
    private Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;
    @ManyToOne
    @JoinColumn(name = "detalle_instrumento_id")
    private DetalleInstrumento detalleInstrumento;
    @ManyToOne
    @JoinColumn(name = "estado_id")
    private Estado estado;

    @OneToMany(mappedBy = "instrumento")
    @JsonIgnore
    private Set<Reservas> reservas;

    @OneToMany(mappedBy = "instrumento")
    @JsonIgnore
    private Set<Imagenes> imagenes;

    public void setImagenes(Set<Imagenes> imagenes) {
        this.imagenes = imagenes;
    }

    public Set<Imagenes> getImagenes() {
        return imagenes;
    }

    public Set<Reservas> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reservas> reservas) {
        this.reservas = reservas;
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

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }


    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public DetalleInstrumento getDetalleInstrumento() {
        return detalleInstrumento;
    }

    public void setDetalleInstrumento(DetalleInstrumento detalleInstrumento) {
        this.detalleInstrumento = detalleInstrumento;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}
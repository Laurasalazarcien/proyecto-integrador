package grupo9.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;


import javax.persistence.*;

@Entity
@Table (name="Usuario")
public class Usuario {

    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private String apellido;
    private String DNI;
    private String contraseña;


    @ManyToOne
    @JoinColumn(name = "rol_id")
    private  Rol rol;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private Set<Reservas> reservas;

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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDNI() {
        return DNI;
    }

    public void setDNI(String DNI) {
        this.DNI = DNI;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}

package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;


import javax.persistence.*;

@Entity
@Table (name="user")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String lastName;
    private String dni;
    private String password;


    @ManyToOne
    @JoinColumn(name = "rol_id")
    private  Rol rol;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Booking> booking;

    public Set<Booking> getBooking() {
        return booking;
    }

    public void setBooking(Set<Booking> booking) {
        this.booking = booking;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
}

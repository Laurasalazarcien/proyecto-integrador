package grupo9.demo.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table (name="Rol")
public class Rol {

    @Id
    @GeneratedValue

    private Long id;
    private String name;

    @OneToMany(mappedBy = "rol")
    @JsonIgnore
    private Set<User> user;

    public Set<User> getUser() {
        return user;
    }

    public void setUser(Set<User> users) {
        this.user = users;
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
}

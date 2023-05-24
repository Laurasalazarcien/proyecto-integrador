package grupo9.demo.model;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table (name="Reservas")
public class Reservas {

    @Id
    @GeneratedValue
    private Long id;
    private Date fechaInicio;
    private Date fechaFinal;

    @ManyToOne
    @JoinColumn(name = "estado_id")
    private Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "instrumento_id")
    private Instrumentos instrumento;

    @ManyToOne
    @JoinColumn(name = "estado_id")
    private Estado estado;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Date fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Instrumentos getInstrumentos() {
        return instrumento;
    }

    public void setInstrumentos(Instrumentos instrumento) {
        this.instrumento = instrumento;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}

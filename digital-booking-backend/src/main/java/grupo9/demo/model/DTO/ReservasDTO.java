package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.Estado;
import grupo9.demo.model.entities.Instrumentos;
import grupo9.demo.model.entities.Usuario;

import java.util.Date;

public class ReservasDTO {

    private Long id;
    private Date fechaInicio;
    private Date fechaFinal;
    private Usuario usuario;
    private Instrumentos instrumentos;
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
        return instrumentos;
    }

    public void setInstrumentos(Instrumentos instrumentos) {
        this.instrumentos = instrumentos;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}

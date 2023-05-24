package grupo9.demo.model.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo9.demo.model.DTO.ReservasDTO;
import grupo9.demo.model.entities.Reservas;
import grupo9.demo.model.repository.IReservas;
import grupo9.demo.model.service.InterfacesService.IReservasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ReservasService implements IReservasService {

    @Autowired
    private IReservas reservasRepository;

    @Autowired
    ObjectMapper mapper;

    private void guardarReserva (ReservasDTO reservasDTO){
        Reservas reservas =mapper.convertValue(reservasDTO, Reservas.class);
        reservasRepository.save(reservas);
    }

    @Override
    public void creareReservas(ReservasDTO reservasDTO) {
        guardarReserva(reservasDTO);
    }

    @Override
    public ReservasDTO leerReservas(Long id) {
        Optional<Reservas> reservas = reservasRepository.findById(id);
        ReservasDTO reservasDTO = null;
        if(reservas.isPresent())
            reservasDTO = mapper.convertValue(reservas, ReservasDTO.class);

        return reservasDTO;
    }

    @Override
    public void modificarReservas(ReservasDTO reservasDTO) {
        guardarReserva(reservasDTO);
    }

    @Override
    public void eliminarReservas(Long id) {
        reservasRepository.deleteById(id);
    }

    @Override
    public Set<ReservasDTO> getTodos() {
        List<Reservas> reservas = reservasRepository.findAll();
        Set<ReservasDTO> reservasDTOS = new HashSet<>();

        for (Reservas reservas1: reservas) {
            reservasDTOS.add(mapper.convertValue(reservas1, ReservasDTO.class));
        }

        return reservasDTOS;

    }
}

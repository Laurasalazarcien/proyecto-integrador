package grupo9.demo.model.DTO;

import grupo9.demo.model.entities.Rol;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {


    private Long id;
    private String name;
    private String lastName;
    private String dni;
    private String password;
    private Rol rol;
}

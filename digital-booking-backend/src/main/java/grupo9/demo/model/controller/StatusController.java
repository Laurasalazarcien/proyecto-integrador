package grupo9.demo.model.controller;


import grupo9.demo.model.DTO.StatusDTO;
import grupo9.demo.model.service.InterfacesService.IStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/status")
public class StatusController {

    @Autowired
    IStatusService statusService;


    @PostMapping
    public ResponseEntity<?> createStatus(@RequestBody StatusDTO statusDTO){
        statusService.createStatus(statusDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public StatusDTO getStatus(@PathVariable Long id){
        return statusService.readStatus(id);
    }

    @PutMapping
    public ResponseEntity<?> modifyStatus(@RequestBody StatusDTO statusDTO){
        statusService.modifyStatus(statusDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeStatus(@PathVariable Long id) {
        statusService.removeStatus(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}

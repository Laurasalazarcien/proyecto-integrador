package grupo9.demo.model.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import javax.persistence.*;

@Getter
@Setter
@Entity
@Table (name="image")

public class Image {

    @Id
    @GeneratedValue
    private Long id;
    private String url;

    @ManyToOne
    @JoinColumn(name = "instrument_id")
    private Instrument instrument;

}

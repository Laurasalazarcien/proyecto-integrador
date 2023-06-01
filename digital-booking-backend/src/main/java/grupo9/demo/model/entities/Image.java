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
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "image_sequence")
    private Long id;
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "instrument_id")
    private Instrument instrument;

}

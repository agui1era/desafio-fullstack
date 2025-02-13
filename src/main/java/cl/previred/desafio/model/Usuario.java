package cl.previred.desafio.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombres;
    private String apellidos;
    private Long rut;
    private String dv;
    private Date fechaNacimiento;
    private String correoElectronico;
    private String contrasena;
}

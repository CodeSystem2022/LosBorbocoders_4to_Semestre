package utn.estudiantes.servicio;

import org.springframework.aop.target.LazyInitTargetSource;
import utn.estudiantes.modelo.Estudiante;

import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiante> listarEstudiante();
    public Estudiante buscarEstudiantePorId(Integer idEstudiante);
    public void guardarEstudiante (Estudiante estudiante);
    public void eliminarEstudiante (Estudiante estudiante);

}

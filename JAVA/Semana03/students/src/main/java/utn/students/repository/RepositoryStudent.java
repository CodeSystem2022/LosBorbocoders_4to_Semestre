package utn.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.students.models.Student;

public interface RepositoryStudent extends JpaRepository<Student, Integer>{
}

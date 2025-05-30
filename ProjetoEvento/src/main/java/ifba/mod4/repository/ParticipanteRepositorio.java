package ifba.mod4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ifba.mod4.model.Participante;

@Repository
public interface ParticipanteRepositorio extends JpaRepository<Participante, Long> {

}

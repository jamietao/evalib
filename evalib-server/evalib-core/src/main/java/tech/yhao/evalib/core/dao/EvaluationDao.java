package tech.yhao.evalib.core.dao;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.core.model.Evaluation;

public interface EvaluationDao {
	
	int insert(Evaluation evaluation);

	int delete(UUID id);
	
	int update(Evaluation evalution);

	List<Evaluation> listAll();

	Evaluation findById(UUID id);

	List<Evaluation> findByName(String name);
}

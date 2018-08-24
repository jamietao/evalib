package tech.yhao.evalib.core.service;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.core.model.ChoiceQuestion;
import tech.yhao.evalib.core.model.Evaluation;

public interface EvaluationService {

	Evaluation createEvaluation(Evaluation evaluation);

	List<Evaluation> listAllEvaluations();

	Evaluation getEvaluationWithQuestions(UUID evaluationId);

	boolean addQuestion(ChoiceQuestion question);

}

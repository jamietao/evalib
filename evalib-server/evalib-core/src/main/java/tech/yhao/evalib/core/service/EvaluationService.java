package tech.yhao.evalib.core.service;

import java.util.List;

import tech.yhao.evalib.core.model.ChoiceQuestion;
import tech.yhao.evalib.core.model.Evaluation;

public interface EvaluationService {

	Evaluation createEvaluation(Evaluation evaluation);

	List<Evaluation> listAllEvaluations();

	boolean addQuestion(ChoiceQuestion question);

}

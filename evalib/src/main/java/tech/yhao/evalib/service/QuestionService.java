package tech.yhao.evalib.service;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.model.ChoiceQuestion;
import tech.yhao.evalib.model.QuestionOption;

public interface QuestionService {

	ChoiceQuestion addChoiceQuestion(ChoiceQuestion question);

	ChoiceQuestion addOptions(UUID questionId, List<QuestionOption> options);

	ChoiceQuestion removeOption(UUID questionId, UUID optionId);

	ChoiceQuestion clearOptions(UUID questionId);
}

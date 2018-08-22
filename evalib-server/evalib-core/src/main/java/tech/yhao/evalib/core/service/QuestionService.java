package tech.yhao.evalib.core.service;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.core.model.ChoiceQuestion;
import tech.yhao.evalib.core.model.ChoiceQuestionOption;

public interface QuestionService {

	ChoiceQuestion addChoiceQuestion(ChoiceQuestion question);

	ChoiceQuestion addOptions(UUID questionId, List<ChoiceQuestionOption> options);

	ChoiceQuestion removeOption(UUID questionId, UUID optionId);

	ChoiceQuestion clearOptions(UUID questionId);
}

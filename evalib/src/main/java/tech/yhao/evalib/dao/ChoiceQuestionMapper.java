package tech.yhao.evalib.dao;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.model.ChoiceQuestion;
import tech.yhao.evalib.model.ChoiceType;

public interface ChoiceQuestionMapper {

	int insert(ChoiceQuestion question);

	int delete(UUID id);

	int update(ChoiceQuestion question);

	List<ChoiceQuestion> queryByUserId(UUID userId);

	List<ChoiceQuestion> queryByChoiceType(ChoiceType choiceType);

	List<ChoiceQuestion> queryByDescription(String description);

	List<ChoiceQuestion> listAll();
}

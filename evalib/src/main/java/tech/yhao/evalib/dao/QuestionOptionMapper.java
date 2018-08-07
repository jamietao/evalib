package tech.yhao.evalib.dao;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.model.QuestionOption;

public interface QuestionOptionMapper {

	int insert(QuestionOption questionOption);

	int delete(UUID id);

	int update(QuestionOption questionOption);

	List<QuestionOption> queryByQuestionId(UUID questionId);
}

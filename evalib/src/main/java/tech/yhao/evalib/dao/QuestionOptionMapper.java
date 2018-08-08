package tech.yhao.evalib.dao;

import java.util.List;
import java.util.UUID;

import org.apache.ibatis.annotations.Param;

import tech.yhao.evalib.model.QuestionOption;

public interface QuestionOptionMapper {

	int insert(@Param("questionId") UUID questionId, @Param("questionOption") QuestionOption questionOption);

	int deleteById(UUID id);

	int deleteByQuestionId(UUID questionId);

	int update(QuestionOption questionOption);

	List<QuestionOption> queryByQuestionId(UUID questionId);
}

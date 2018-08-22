package tech.yhao.evalib.core.dao;

import java.util.List;
import java.util.UUID;
import tech.yhao.evalib.core.model.ChoiceQuestionOption;

public interface ChoiceQuestionOptionDao {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.t_choice_question_option
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    int deleteByPrimaryKey(UUID id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.t_choice_question_option
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    int insert(ChoiceQuestionOption record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.t_choice_question_option
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    ChoiceQuestionOption selectByPrimaryKey(UUID id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.t_choice_question_option
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    List<ChoiceQuestionOption> selectAll();

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table public.t_choice_question_option
     *
     * @mbg.generated Wed Aug 22 13:45:02 CST 2018
     */
    int updateByPrimaryKey(ChoiceQuestionOption record);
}
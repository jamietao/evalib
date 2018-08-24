package tech.yhao.evalib.service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tech.yhao.evalib.core.dao.ChoiceQuestionDao;
import tech.yhao.evalib.core.dao.EvaluationDao;
import tech.yhao.evalib.core.dao.UserDao;
import tech.yhao.evalib.core.model.ChoiceQuestion;
import tech.yhao.evalib.core.model.Evaluation;
import tech.yhao.evalib.core.model.EvaluationState;
import tech.yhao.evalib.core.model.User;
import tech.yhao.evalib.core.service.EvaluationService;

@Service
public class EvaluationServiceImpl implements EvaluationService {

	private UserDao userDao;
	private EvaluationDao evaluationDao;
	private ChoiceQuestionDao choiceQuestionDao;

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Autowired
	public void setEvaluationDao(EvaluationDao evaluationDao) {
		this.evaluationDao = evaluationDao;
	}

	@Autowired
	public void setChoiceQuestionDao(ChoiceQuestionDao choiceQuestionDao) {
		this.choiceQuestionDao = choiceQuestionDao;
	}

	@Override
	public Evaluation createEvaluation(Evaluation evaluation) {
		// TODO: get the user from current request session.
		User admin = userDao.selectAll().get(0);
		evaluation.setCreatedBy(admin.getId());
		evaluation.setState(EvaluationState.DRAFT);

		Date now = new Date();
		evaluation.setCreatedAt(now);
		evaluation.setUpdatedAt(now);

		this.evaluationDao.insert(evaluation);
		return evaluation;
	}

	@Override
	public List<Evaluation> listAllEvaluations() {
		return this.evaluationDao.selectAll();
	}

	public Evaluation getEvaluationWithQuestions(UUID evaluationId) {
		Evaluation evaluation = this.evaluationDao.selectByPrimaryKeyWithQuestionInfo(evaluationId);
		return evaluation;
	}

	@Override
	public boolean addQuestion(ChoiceQuestion question) {
		// TODO Auto-generated method stub
		return false;
	}
}

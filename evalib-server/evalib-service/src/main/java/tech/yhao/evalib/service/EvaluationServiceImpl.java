package tech.yhao.evalib.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tech.yhao.evalib.core.dao.EvaluationDao;
import tech.yhao.evalib.core.dao.UserDao;
import tech.yhao.evalib.core.model.ChoiceQuestion;
import tech.yhao.evalib.core.model.Evaluation;
import tech.yhao.evalib.core.model.EvaluationState;
import tech.yhao.evalib.core.model.User;
import tech.yhao.evalib.core.service.EvaluationService;

@Service
public class EvaluationServiceImpl implements EvaluationService {

	private EvaluationDao evaluationDao;
	private UserDao userDao;

	@Autowired
	public void setEvaluationDao(EvaluationDao evaluationDao) {
		this.evaluationDao = evaluationDao;
	}
	
	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public Evaluation createEvaluation(Evaluation evaluation) {
		// TODO: get the user from current request session. 
		User admin = userDao.findByName("admin");
		evaluation.setCreatedBy(admin.getId());
		evaluation.setState(EvaluationState.DRAFT);
		this.evaluationDao.insert(evaluation);
		return evaluation;
	}

	@Override
	public List<Evaluation> listAllEvaluations() {
		return this.evaluationDao.listAll();
	}

	@Override
	public boolean addQuestion(ChoiceQuestion question) {
		// TODO Auto-generated method stub
		return false;
	}
}

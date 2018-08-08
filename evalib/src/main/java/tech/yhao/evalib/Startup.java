package tech.yhao.evalib;

import java.util.Date;

import org.apache.ibatis.session.SqlSession;

import tech.yhao.evalib.dao.ChoiceQuestionMapper;
import tech.yhao.evalib.dao.MybatisHelper;
import tech.yhao.evalib.dao.UserMapper;
import tech.yhao.evalib.model.ChoiceQuestion;
import tech.yhao.evalib.model.ChoiceType;
import tech.yhao.evalib.model.QuestionOption;
import tech.yhao.evalib.model.User;
import tech.yhao.evalib.service.UserService;
import tech.yhao.evalib.service.UserServiceImpl;

public class Startup {

	public static void main(String[] args) throws Exception {
		UserService userService = new UserServiceImpl();
		User user = new User();
		user.setName("jacky");
		user.setDescription("Jacky Chen");
		userService.registerUser(user);
		
		User userGot = userService.getUser(user.getId());
	}	

	private ChoiceQuestion getChoiceQuestion() {
		ChoiceQuestion question = new ChoiceQuestion();
		question.setChoiceType(ChoiceType.SINGLE);
		question.setDescription("������ת�����Ƕ�ã�");

		QuestionOption option = new QuestionOption();
		option.setDescription("1��");

		question.addOption(option);

		option = new QuestionOption();
		option.setDescription("365��");
		question.addOption(option);

		option = new QuestionOption();
		option.setDescription("1����");
		question.addOption(option);
		
		option = new QuestionOption();
		option.setDescription("1������");
		question.addOption(option);
		
		return question;
	}
}

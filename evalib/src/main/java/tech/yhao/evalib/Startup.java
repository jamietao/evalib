package tech.yhao.evalib;

import java.util.Date;

import org.apache.ibatis.session.SqlSession;

import tech.yhao.evalib.dao.ChoiceQuestionMapper;
import tech.yhao.evalib.dao.MybatisHelper;
import tech.yhao.evalib.dao.UserMapper;
import tech.yhao.evalib.model.ChoiceQuestion;
import tech.yhao.evalib.model.ChoiceType;
import tech.yhao.evalib.model.User;

public class Startup {

	public static void main(String[] args) throws Exception {
		SqlSession session = MybatisHelper.getSession();
		User user = testFindUserByName(session);
		ChoiceQuestion question = testInsertChoiceQuestion(session, user);
		testUpdateChoiceQuestion(session, question);
		testDeleteChoiceQuestion(session, question);
	}

	private static User testFindUserByName(SqlSession session) {
		UserMapper userMapper = session.getMapper(UserMapper.class);
		User user = userMapper.findByName("admin");

		if (user != null) {
			System.out.println(user.getDescription());
			System.out.println(user.getCreatedAt());
		}

		return user;
	}

	private static ChoiceQuestion testInsertChoiceQuestion(SqlSession session, User user) {
		ChoiceQuestion question = new ChoiceQuestion();
		question.setChoiceType(ChoiceType.MULTIPLE);
		question.setDescription("地球公转一周时间时多久？");
		question.setCreatedBy(user.getId());

		Date now = new Date();
		question.setCreatedAt(now);
		question.setUpdatedAt(now);

		ChoiceQuestionMapper mapper = session.getMapper(ChoiceQuestionMapper.class);
		mapper.insert(question);
		session.commit();

		System.out.println(question.getId());
		return question;
	}

	private static ChoiceQuestion testUpdateChoiceQuestion(SqlSession session, ChoiceQuestion question) {
		question.setDescription("地球自转一周需要多久？");
		ChoiceQuestionMapper mapper = session.getMapper(ChoiceQuestionMapper.class);
		mapper.update(question);
		session.commit();
		return question;
	}

	private static void testDeleteChoiceQuestion(SqlSession session, ChoiceQuestion question) {
		ChoiceQuestionMapper mapper = session.getMapper(ChoiceQuestionMapper.class);
		mapper.delete(question.getId());
		session.commit();
	}
}

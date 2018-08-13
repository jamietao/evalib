package tech.yhao.evalib.service;

import java.util.List;
import java.util.UUID;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import tech.yhao.evalib.dao.MybatisHelper;
import tech.yhao.evalib.dao.UserMapper;
import tech.yhao.evalib.model.User;

@Service
public class UserServiceImpl implements UserService {

	public User registerUser(User user) throws Exception {
		SqlSession session = null;

		try {
			session = MybatisHelper.getSession();
			UserMapper userMapper = session.getMapper(UserMapper.class);
			userMapper.insert(user);
			session.commit();
			return user;
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public void deleteUser(String userId) throws Exception {
		SqlSession session = null;

		try {
			session = MybatisHelper.getSession();
			UserMapper userMapper = session.getMapper(UserMapper.class);
			userMapper.delete(UUID.fromString(userId));
			session.commit();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public User getUser(UUID userId) throws Exception {
		SqlSession session = null;

		try {
			// TODO: will integrate with spring and auto inject the session.
			session = MybatisHelper.getSession();
			UserMapper userMapper = session.getMapper(UserMapper.class);
			return userMapper.findById(userId);
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public User getUser(String name) throws Exception {
		SqlSession session = null;
		try {
			session = MybatisHelper.getSession();
			UserMapper userMapper = session.getMapper(UserMapper.class);
			return userMapper.findByName(name);
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	@Override
	public List<User> getAll() throws Exception {
		SqlSession session = null;
		try {
			session = MybatisHelper.getSession();
			UserMapper userMapper = session.getMapper(UserMapper.class);
			return userMapper.listAll();
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}
}

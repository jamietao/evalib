package tech.yhao.evalib.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tech.yhao.evalib.core.dao.UserDao;
import tech.yhao.evalib.core.model.User;
import tech.yhao.evalib.core.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private UserDao userDao;

	@Autowired
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Transactional
	public User registerUser(User user) {
		userDao.insert(user);
		return user;
	}

	public void deleteUser(String userId) {
		userDao.deleteByPrimaryKey(UUID.fromString(userId));
	}

	public User getUser(UUID userId) {
		return userDao.selectByPrimaryKey(userId);
	}

	@Override
	public List<User> getAll() {
		return userDao.selectAll();
	}
}

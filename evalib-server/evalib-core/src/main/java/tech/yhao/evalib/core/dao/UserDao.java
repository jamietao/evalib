package tech.yhao.evalib.core.dao;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.core.model.User;

public interface UserDao {
	
	int insert(User user);

	int delete(UUID id);

	List<User> listAll();

	User findById(UUID id);

	User findByName(String name);
}

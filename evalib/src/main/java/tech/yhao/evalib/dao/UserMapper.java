package tech.yhao.evalib.dao;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.model.User;

public interface UserMapper {
	
	int insert(User user);
	
	List<User> listAll();
	
	User findById(UUID id);
	
	User findByName(String name);
}

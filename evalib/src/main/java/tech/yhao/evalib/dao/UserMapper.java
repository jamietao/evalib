package tech.yhao.evalib.dao;

import java.util.UUID;

import tech.yhao.evalib.model.User;

public interface UserMapper {
	
	int insert(User user);
	
	User findById(UUID id);
}

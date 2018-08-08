package tech.yhao.evalib.service;

import java.util.UUID;

import tech.yhao.evalib.model.User;

public interface UserService {

	User registerUser(User user) throws Exception;
	
	User getUser(UUID userId) throws Exception;
	
	User getUser(String name) throws Exception;
}

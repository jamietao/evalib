package tech.yhao.evalib.service;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.model.User;

public interface UserService {

	User registerUser(User user) throws Exception;

	void deleteUser(String userId) throws Exception;

	List<User> getAll() throws Exception;

	User getUser(UUID userId) throws Exception;

	User getUser(String name) throws Exception;
}

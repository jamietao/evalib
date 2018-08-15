package tech.yhao.evalib.core.service;

import java.util.List;
import java.util.UUID;

import tech.yhao.evalib.core.model.User;

public interface UserService {

	User registerUser(User user);

	void deleteUser(String userId);

	List<User> getAll();

	User getUser(UUID userId);

	User getUser(String name);
}

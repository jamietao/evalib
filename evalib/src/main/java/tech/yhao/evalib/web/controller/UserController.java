package tech.yhao.evalib.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import tech.yhao.evalib.dto.UserRegistration;
import tech.yhao.evalib.model.User;
import tech.yhao.evalib.service.UserService;

@RequestMapping("/user")
@Controller
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = { "", "/", "/index" }, method = RequestMethod.GET)
	public String index(Model model) throws Exception {
		List<User> users = userService.getAll();
		model.addAttribute("users", users);

		return "/user/list";
	}

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String registerView(Model model) throws Exception {
		return "/user/register";
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ModelAndView register(UserRegistration user, Model model) throws Exception {
		User newUser = new User();
		newUser.setName(user.getName());
		newUser.setDescription(user.getDescription());

		this.userService.registerUser(newUser);

		return new ModelAndView("redirect:/user");
	}

	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public ModelAndView register(@RequestParam("id") String id) throws Exception {
		this.userService.deleteUser(id);
		return new ModelAndView("redirect:/user");
	}
}

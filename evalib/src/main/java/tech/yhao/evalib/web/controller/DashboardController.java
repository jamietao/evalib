package tech.yhao.evalib.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/")
@Controller
public class DashboardController {

	@RequestMapping(value = { "", "/", "dashboard" })
	public String dashboard() {
		return "/dashboard/dashboard";
	}
}

package tech.yhao.evalib.web.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/evaluation")
@Controller
public class EvaluationController {

	@RequestMapping(value = { "", "/", "list" })
	public String index() {
		return "/evaluation/list";
	}
}

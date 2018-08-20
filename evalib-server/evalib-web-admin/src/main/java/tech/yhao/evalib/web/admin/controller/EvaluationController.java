package tech.yhao.evalib.web.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import tech.yhao.evalib.core.model.Evaluation;
import tech.yhao.evalib.core.service.EvaluationService;
import tech.yhao.evalib.web.admin.dto.EvaluationCreationParam;

@RequestMapping("/admin/evaluation")
@Controller
public class EvaluationController {

	@Autowired
	private EvaluationService evaluationService;

	@RequestMapping(value = { "", "/", "list" })
	public String index(Model model) {
		List<Evaluation> evaluationList = evaluationService.listAllEvaluations();
		model.addAttribute("evaluationList", evaluationList);

		return "/evaluation/list";
	}

	@RequestMapping(value = { "/create" }, method = RequestMethod.GET)
	public String createView() {
		return "/evaluation/create";
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ModelAndView create(EvaluationCreationParam creationParam) {
	    Evaluation evaluation = new Evaluation();
	    evaluation.setName(creationParam.getName());
	    evaluation.setDescription(creationParam.getDescription());
	    this.evaluationService.createEvaluation(evaluation);
	    
		return new ModelAndView("redirect:/evaluation/");
	}
}

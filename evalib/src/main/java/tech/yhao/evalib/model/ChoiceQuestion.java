package tech.yhao.evalib.model;

import java.util.List;

public class ChoiceQuestion extends Entity {

	private ChoiceType choiceType;
	private String description;

	private List<QuestionOption> options;

	public ChoiceType getChoiceType() {
		return choiceType;
	}

	public void setChoiceType(ChoiceType choiceType) {
		this.choiceType = choiceType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<QuestionOption> getOptions() {
		return options;
	}

	public void setOptions(List<QuestionOption> options) {
		this.options = options;
	}
}

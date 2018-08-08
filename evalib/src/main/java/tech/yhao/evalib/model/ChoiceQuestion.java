package tech.yhao.evalib.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ChoiceQuestion extends Entity {

	private ChoiceType choiceType;
	private String description;

	private final List<QuestionOption> options = new ArrayList<QuestionOption>();

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

	public Set<QuestionOption> getOptions() {
		return new HashSet<QuestionOption>(this.options);
	}

	public void addOption(QuestionOption option) {
		this.options.add(option);
	}

	public void removeOption(QuestionOption option) {
		if (this.options.contains(option)) {
			this.options.remove(option);
		}
	}
}

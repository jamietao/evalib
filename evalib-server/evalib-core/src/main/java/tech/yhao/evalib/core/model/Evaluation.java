package tech.yhao.evalib.core.model;

import java.io.Serializable;

public class Evaluation extends Entity implements Serializable {

	private static final long serialVersionUID = 2058300280248424976L;

	private String name;
	private String description;
	private EvaluationState state;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public EvaluationState getState() {
		return state;
	}

	public void setState(EvaluationState state) {
		this.state = state;
	}

}

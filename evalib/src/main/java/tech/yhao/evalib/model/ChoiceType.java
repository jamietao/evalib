package tech.yhao.evalib.model;

public enum ChoiceType {

	SINGLE("Single", 0), MULTIPLE("Multiple", 1);

	private String description;
	private int value;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	ChoiceType(String description, int value) {
		this.description = description;
		this.value = value;
	}

}

package tech.yhao.evalib.model;

import java.io.Serializable;

public class User extends Entity implements Serializable {
	
	private static final long serialVersionUID = 4840986371198597283L;
	
	private String name;
	private String description;

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
}

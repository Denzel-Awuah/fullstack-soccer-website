package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table
public class Teams {
	
	@Id
	@SequenceGenerator(
			name =  "teams_sequence",
			sequenceName = "teams_sequence",
			allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String teamName;
	private String photoLink;
	private String teamId;
	
	
	public Teams() {}
	
	
	public Teams(Long id, String teamName, String photoLink, String teamId) {
		this.id = id;
		this.teamName = teamName;
		this.photoLink = photoLink;
		this.teamId = teamId;
	}

	public Teams(String teamName, String photoLink, String teamId) {
		this.teamName = teamName;
		this.photoLink = photoLink;
		this.teamId = teamId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getPhotoLink() {
		return photoLink;
	}

	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}

	public String getTeamId() {
		return teamId;
	}

	public void setTeamId(String teamId) {
		this.teamId = teamId;
	}

	@Override
	public String toString() {
		return "Teams [id=" + id + ", teamName=" + teamName + ", photoLink=" + photoLink + ", teamId=" + teamId + "]";
	}
	

	
	
	
	
	
	
}

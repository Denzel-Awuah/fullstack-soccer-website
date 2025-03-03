package com.denzelawuah.soccersite.springbootangularsoccersite.players;


import jakarta.persistence.*;

@Entity
@Table
public class Players {

	@Id
	@SequenceGenerator(
			name = "players_sequence",
			sequenceName = "players_sequence",
			allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String firstName;
	private String lastName;
	private Integer age;
	private String height;
	private String nationality;
	private String playerPic;
	private Long playerId;
	
	public Players () {}

	public Players(Long id, String firstName, String lastName, Integer age, String height, String nationality,
			String playerPic, Long playerId) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.height = height;
		this.nationality = nationality;
		this.playerPic = playerPic;
		this.playerId = playerId;
	}


	public Players(String firstName, String lastName, Integer age, String height, String nationality, String playerPic,
			Long playerId) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.height = height;
		this.nationality = nationality;
		this.playerPic = playerPic;
		this.playerId = playerId;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public Integer getAge() {
		return age;
	}


	public void setAge(Integer age) {
		this.age = age;
	}


	public String getHeight() {
		return height;
	}


	public void setHeight(String height) {
		this.height = height;
	}


	public String getNationality() {
		return nationality;
	}


	public void setNationality(String nationality) {
		this.nationality = nationality;
	}


	public Long getPlayerId() {
		return playerId;
	}


	public void setPlayerId(Long playerId) {
		this.playerId = playerId;
	}


	public String getPlayerPic() {
		return playerPic;
	}


	public void setPlayerPic(String playerPic) {
		this.playerPic = playerPic;
	}


	@Override
	public String toString() {
		return "Players [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", height=" + height + ", nationality=" + nationality + ", playerPic=" + playerPic + ", playerId="
				+ playerId + "]";
	}

}

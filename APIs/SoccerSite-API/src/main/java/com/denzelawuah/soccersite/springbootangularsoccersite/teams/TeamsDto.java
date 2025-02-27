package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

public class TeamsDto {

    private Long id;
    private String teamName;
    private String photoLink;
    private String teamId;

    public TeamsDto() {}

    public TeamsDto(Long id, String teamName, String photoLink, String teamId) {
        this.id = id;
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
}

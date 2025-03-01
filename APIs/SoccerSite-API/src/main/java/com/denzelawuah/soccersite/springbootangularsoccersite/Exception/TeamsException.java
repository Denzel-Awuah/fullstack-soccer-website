package com.denzelawuah.soccersite.springbootangularsoccersite.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class TeamsException extends RuntimeException{
    public TeamsException(String message) {
        super(message);
    }
}

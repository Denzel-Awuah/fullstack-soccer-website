package com.denzelawuah.soccersite.springbootangularsoccersite.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PlayerException extends RuntimeException{
    public PlayerException(String message){
        super(message);
    }
}

package com.activesport.demo.web_controllers;

import com.activesport.demo.services.UserFriendsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/friends")
public class UserFriendsController {

    @Autowired
    private UserFriendsService userFriendsService;


    @PostMapping("/addNewUser")
    ResponseEntity<?> addNewUser()
}

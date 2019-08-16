package com.activesport.demo.web_controllers;


import com.activesport.demo.services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/group")
public class GroupController {

    @Autowired
    private GroupService groupService;

}

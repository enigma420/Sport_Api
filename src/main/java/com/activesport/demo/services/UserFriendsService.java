package com.activesport.demo.services;

import com.activesport.demo.domain.User;
import com.activesport.demo.domain.UserFriends;
import com.activesport.demo.repositories.UserFriendsRepository;
import com.activesport.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserFriendsService {

    @Autowired
    private UserFriendsRepository userFriendsRepository;

    @Autowired
    private UserRepository userRepository;

    public UserFriends addUserFriend(User newUser){

//        if(newUser.getId() != null){
//
//        }

        User user = userFriendsRepository.findByUsername(username);
        newUser.set

    }

}

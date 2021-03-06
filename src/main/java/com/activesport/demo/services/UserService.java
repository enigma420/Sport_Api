package com.activesport.demo.services;

import com.activesport.demo.domain.User;
import com.activesport.demo.exceptions.UsernameAlreadyExistsException;
import com.activesport.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser){

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

            newUser.setUsername(newUser.getUsername());

            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '" + newUser.getUsername() + "' already exists");
        }

    }

//    public User savePersonalDataUser(User newUser){
//
//        newUser.setName(newUser.getName());
//        newUser.setSurname(newUser.getSurname());
//        newUser.setCountry(newUser.getCountry());
//        newUser.setCity(newUser.getCity());
//        newUser.setAge(newUser.getAge());
//
//        return userRepository.save(newUser);
//    }

}

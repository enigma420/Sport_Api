package com.activesport.demo.services;

import com.activesport.demo.domain.PersonalData;
import com.activesport.demo.domain.User;
import com.activesport.demo.exceptions.PersonalDataNotFoundException;
import com.activesport.demo.exceptions.PersonalDataPeselException;
import com.activesport.demo.repositories.PersonalDataRepository;
import com.activesport.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonalDataService {

    @Autowired
    private PersonalDataRepository personalDataRepository;

    @Autowired
    private UserRepository userRepository;

    public PersonalData saveOrUpdatePersonalData(PersonalData personalData, String username){

        if(personalData.getId() != null){
        PersonalData existingPersonalData = personalDataRepository.findByPesel(personalData.getPesel());
        if(existingPersonalData != null && (!existingPersonalData.getEmailUser().equals(username))){
            throw new PersonalDataNotFoundException("Personal Data not found in your account");
                }else if(existingPersonalData == null){
                    throw new PersonalDataNotFoundException("Personal Data with Pesel: '" + personalData.getPesel() + "' cannot be updated");
                }
        }
        try{
            User user = userRepository.findByUsername(username);
            personalData.setUser(user);
            personalData.setPesel(personalData.getPesel());
            personalData.setEmailUser(user.getUsername());

            return personalDataRepository.save(personalData);
        }catch(Exception e){
            throw new PersonalDataPeselException("Personal Data with Pesel: '" + personalData.getPesel() + "' already exists");
        }
    }

    public PersonalData findPersonalDataByPesel(String pesel, String username){

        PersonalData personalData = personalDataRepository.findByPesel(pesel);

        if(personalDataRepository.count() == 0){
            throw new PersonalDataPeselException("No Personal Data Exist");
        }else if(personalData == null){
            throw new PersonalDataPeselException("Personal Data Pesel '" + pesel + "' does not exist");
        }

        return personalData;
    }

//    public PersonalData findPersonalDataByEmailUser(String emailUser, String username){
//
//        PersonalData personalData = personalDataRepository.findByEmailUser(emailUser);
//
//        if(personalDataRepository.count() == 0){
//            throw new PersonalDataPeselException("No Personal Data Exist");
//        }else if(personalData == null){
//            throw new PersonalDataPeselException("Personal Data from Email '" + emailUser + "' does not exist");
//        }
//
//        return personalData;
//    }
}
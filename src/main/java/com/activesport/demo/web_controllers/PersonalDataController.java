package com.activesport.demo.web_controllers;

import com.activesport.demo.domain.Event;
import com.activesport.demo.domain.PersonalData;
import com.activesport.demo.services.MapValidationErrorService;
import com.activesport.demo.services.PersonalDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequestMapping("/api/personalData")
@CrossOrigin
public class PersonalDataController {


    @Autowired
    private PersonalDataService personalDataService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("")
    public ResponseEntity<?> createPersonalData(@Valid @RequestBody PersonalData personalData, BindingResult result, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);

        if(errorMap != null) return errorMap;

        PersonalData newPersonalData = personalDataService.saveOrUpdatePersonalData(personalData, principal.getName());
        return new ResponseEntity<PersonalData>(personalData, HttpStatus.CREATED);
    }

    @GetMapping("/{pesel}")
    public ResponseEntity<?> getPersonalDataByPesel(@PathVariable("pesel") String pesel, Principal principal){

        PersonalData personalData = personalDataService.findPersonalDataByPesel(pesel,principal.getName());

        return new ResponseEntity<PersonalData>(personalData, HttpStatus.OK);
    }

    @GetMapping("/{email_user}")
    public ResponseEntity<?> getPersonalDataByEmailUser(@PathVariable("email_user") String emailUser, Principal principal){

        PersonalData personalData = personalDataService.findPersonalDataByEmailUser(emailUser, principal.getName());

        return new ResponseEntity<PersonalData>(personalData,HttpStatus.OK);
    }

//    @PatchMapping("")
//    public ResponseEntity<?> updatePersonalData(@Valid @RequestBody PersonalData personalData, BindingResult result, Principal principal){
//
//        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
//        if(errorMap != null) return errorMap;
//
//        PersonalData updatedPersonalData = personalDataService.saveOrUpdatePersonalData(personalData,principal.getName());
//
//        return new ResponseEntity<PersonalData>(updatedPersonalData,HttpStatus.OK);
//    }

}

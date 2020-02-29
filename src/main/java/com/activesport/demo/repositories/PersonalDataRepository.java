package com.activesport.demo.repositories;

import com.activesport.demo.domain.PersonalData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalDataRepository extends CrudRepository<PersonalData,Long> {

    PersonalData findByPesel(String personalId);

}

package com.activesport.demo.repositories;

import com.activesport.demo.domain.Group;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends CrudRepository<Group, Long> {

    Group findByGroupIdentifier(String groupId);

}

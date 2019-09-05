package com.activesport.demo.repositories;

import com.activesport.demo.domain.User;
import com.activesport.demo.domain.UserFriends;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface UserFriendsRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
    List<User> findAllByUsername(Set<String> username);


}

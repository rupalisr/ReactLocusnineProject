package com.demo;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface UserRepository extends JpaRepository<UserDetails , Integer> {

	@Query(value = "select count(user_name) from sql12383874.user_details where user_name = :username " , nativeQuery = true)
	public int getCountOfUsersOFSimilar(String username);
}

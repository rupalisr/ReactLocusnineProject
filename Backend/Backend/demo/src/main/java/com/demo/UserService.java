package com.demo;

import java.util.List;

public interface UserService {

	List<UserDetails> getUsers();

	String saveUser(UserDetails user);
	
	String updateUser(UserDetails user);

	String deleteUser(UserDetails user);

}

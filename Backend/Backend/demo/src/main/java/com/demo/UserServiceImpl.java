package com.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	public UserRepository repo;

	@Override
	public List<UserDetails> getUsers() {
		
		return repo.findAll();
	}

	@Override
	public String saveUser(UserDetails user) {
	
		int count = repo.getCountOfUsersOFSimilar(user.getUser_name());
		System.out.println(count);
		user.setEmail((user.getUser_name().replaceAll("\\s+", "")).toLowerCase()+"@locusine.com");
		if(count != 0) {
			String[] res = user.getEmail().split("@");
			user.setEmail((user.getUser_name().replaceAll("\\s+", "")).toLowerCase()+count+"@locusine.com");
			user.setStatus("Active");
		}
		
		if(user.getStatus()==null) {
			user.setStatus("Inactive");
		}
		repo.save(user);
		return "Saved";
	}
	
	@Override
	public String updateUser(UserDetails user) {
		repo.update(user);
		return "Updated";
	}

	@Override
	public String deleteUser(UserDetails user) {
		repo.delete(user);
		return "Deleted";
	}


}

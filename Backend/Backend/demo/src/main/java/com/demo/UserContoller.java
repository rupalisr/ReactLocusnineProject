package com.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/")
@CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
public class UserContoller {
	
	@Autowired
	public UserService service;
	
	@GetMapping(path = "getUsers", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<UserDetails> getUserDetails(){
		System.out.println(service.getUsers());
		return service.getUsers();
	}
	
	@PostMapping(path = "saveUsers", produces = MediaType.APPLICATION_JSON_VALUE)
	public String saveDetails(@RequestBody UserDetails user){
		return service.saveUser(user);
	}
	
	@PostMapping(path = "updateUser", produces = MediaType.APPLICATION_JSON_VALUE)
	public String updateDetails(@RequestBody UserDetails user){
		return service.saveUser(user);
	}
	
	@PostMapping(path = "deleteUser", produces = MediaType.APPLICATION_JSON_VALUE)
	public String deleteUser(@RequestBody UserDetails user) {
		return service.deleteUser(user);
	}
	
	
	

}

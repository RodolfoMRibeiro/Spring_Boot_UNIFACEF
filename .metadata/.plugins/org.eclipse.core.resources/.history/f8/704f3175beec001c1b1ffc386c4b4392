package com.tic.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tic.application.model.User;
import com.tic.application.model.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	UserRepository injection;
	
	@PostMapping("/usuario")
	@CrossOrigin(origins="*")
	public String cadastrarUsuario (@RequestBody User usuario) {
		
		try {
			injection.save(usuario);
		}
		catch(Exception e) {
			return "erro ao cadastrar usuario";
		}
		return "Usuário cadastrado com sucesso";
	}
}

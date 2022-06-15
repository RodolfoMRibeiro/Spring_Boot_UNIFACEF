package com.tic.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/usuario/{id}")
	@CrossOrigin(origins="*")
	public User getUsuario (@PathVariable Long id) {
		List<User> usuarios = injection.findAll();
		for (int i=0; i<usuarios.size(); i++) {
			if(usuarios.get(i).getId() == id) {
				return usuarios.get(i);
			}
		}
		return null;
	}
	
	@PutMapping("/usuario")
	@CrossOrigin(origins="*")
	public User updateUser (@RequestBody User usuario) {
		injection.save(usuario);
		return usuario;
	}
	
	@DeleteMapping("/usuario/{id}")
	@CrossOrigin(origins="*")
	public String delete(@PathVariable Long id) {
		try {
			injection.deleteById(id);
			return "Remoção realizada com sucesso";
		}
		catch(Exception e) {
			return "Nenhum usuario encontrado";
		}	
	}
}

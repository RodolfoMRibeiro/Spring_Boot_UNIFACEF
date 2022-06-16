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

import com.tic.application.model.Card;
import com.tic.application.model.repository.CardRepository;

@RestController
public class CardController {

	@Autowired
	CardRepository databaseInjection;
	
	@GetMapping("/card/consulta")
	@CrossOrigin(origins="*")
	public List<Card> getCards() {
		return databaseInjection.findAll();
	}
	
	@PutMapping("/card")
	@CrossOrigin(origins="*")
	public Card atualizarCard(@RequestBody Card card) {
		return databaseInjection.save(card);
	}
	
	@PostMapping("/card")
	@CrossOrigin(origins="*")
	public String cadastrarUsuario (@RequestBody Card card) {
		
		try {
			databaseInjection.save(card);
		}
		catch(Exception e) {
			return "erro ao criar card";
		}
		return "Usuário criado com sucesso";
	}
	
	@DeleteMapping("/card/{id}")
	@CrossOrigin(origins="*")
	public String delete(@PathVariable Long id) {
		try {
			databaseInjection.deleteById(id);
			return "Remoção realizada com sucesso";
		}
		catch(Exception e) {
			return "Nenhum card encontrado";
		}	
	}
	
}

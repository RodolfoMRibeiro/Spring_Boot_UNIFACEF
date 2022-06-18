package com.tic.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tic.application.model.Metas;
import com.tic.application.model.repository.MetasRepository;

@RestController
public class MetasController {

	@Autowired
	MetasRepository injection;
	
	@PutMapping("/metas")
	@CrossOrigin(origins="*")
	public void updateMetas(@RequestBody Metas meta) {
		injection.save(meta);
	}

	@GetMapping("/metas")
	public List<Metas> mostrar() {
		return injection.findAll();
	}
	
}

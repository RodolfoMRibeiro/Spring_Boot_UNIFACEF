package com.tic.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cards")
public class Card {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="titulo")
	protected String titulo;
	@Column(name="descricao")
	protected String descricao;
	@Column(name="materia")
	protected String materia;
	@Column(name="concluido")
	protected boolean concluido;
	
	public Card () {
		
	}
	
	public Card (String titulo, String descricao, String materia) {
		this.titulo = titulo;
		this.descricao = descricao;
		this.materia = materia;
		this.concluido = false;
	}
	
	public Card(Long id, String titulo, String descricao, String materia) {
		this.id = id;
		this.titulo = titulo;
		this.descricao = descricao;
		this.materia = materia;
		this.concluido = false;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}
	public boolean isConcluido() {
		return concluido;
	}
	public void setConcluido(boolean concluido) {
		this.concluido = concluido;
	}
	
	
	
}

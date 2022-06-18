package com.tic.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@Column(name="login")
	private String login;
		
	@Column(name="name")
	private String name;
	@Column(name="password")
	private String password;
	@ManyToOne
	@JoinColumn(name = "meta_ID")
	private Metas metaID;
	
	public User() {
		
	}
	
	public User(String name, String login, String password) {
		this.name = name;
		this.login = login;
		this.password = password;
	}
	
	public User (String name, String login, String password, Metas metaID) {
		this.name = name;
		this.login = login;
		this.password = password;
		this.metaID = metaID;
	}
	
	public Metas getMeta() {
		return metaID;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}

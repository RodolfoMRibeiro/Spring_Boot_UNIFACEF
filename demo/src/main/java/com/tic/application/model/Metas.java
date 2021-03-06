package com.tic.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="metas")
public class Metas {

	@Id
	@Column(name="meta_ID")
	private Integer metaID;
	
	public Metas() {
		
	}

	public Metas (Integer metaID) {
		this.metaID = metaID;
	}

	public Integer getMetaID() {
		return metaID;
	}

	public void setMetaID(Integer metaID) {
		this.metaID = metaID;
	}

}
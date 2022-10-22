package com.example.demo.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="patient")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id ; 
	@Column(name="pname")
	private String pname ; 
	@Column(name="address")
	private String address ;  
	@Column(name="contactno")
	private String contactno ; 
	@Column(name="age")
	private int age;  
	@Column(name="gender")
	private String gender; 
	@Column(name="bloodgroup")
	private String bloodgroup ;
	@Column(name="birthdate")
	private Date birthdate;
	@Column(name="doctorid")
	private int doctorid;
	
	@ManyToOne(targetEntity=Doctor.class,fetch=FetchType.EAGER)
	@JoinColumn(name="doctorid",insertable = false,updatable = false)
	private Doctor doctor;
	
	public Doctor getDoctor() {
		return doctor;
	}


	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	
	public Patient()
	{
		
	}

	public Patient(int id, String pname, String address, String contactno, int age, String gender,
			String bloodgroup, Date birthdate, int doctorid) {
		super();
		this.id = id;
		this.pname = pname;
		this.address = address;
		this.contactno = contactno;
		this.age = age;
		this.gender = gender;
		this.bloodgroup = bloodgroup;
		this.birthdate = birthdate;
		this.doctorid = doctorid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public int getDoctorid() {
		return doctorid;
	}

	public void setDoctorid(int doctorid) {
		this.doctorid = doctorid;
	}
	
	

}





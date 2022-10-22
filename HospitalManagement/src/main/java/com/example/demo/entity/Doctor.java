package com.example.demo.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="doctor")
public class Doctor {
	
	@Id
	@Column(name="id")
	private int id ;
	@Column(name="dname")
    private String	dname ;
	@Column(name="email")
    private String email;
	@Column(name="contactno")
    private String contactno ;
	@Column(name="qualification")
    private String qualification ;
	@Column(name="gender")
    private String gender;
	@Column(name="bloodgroup")
    private String bloodgroup ;
	@Column(name="dateofjoin")
    private Date dateofjoin;
	@Column(name="address")
    private String address;
	@Column(name="speciality")
    private String speciality ;
	
	@OneToMany(mappedBy="doctor")
	private Set<Patient>patient;
	
	public Set<Patient> getPatient() {
		return patient;
	}
	
	public void setPatient(Set<Patient> patient) {
		this.patient = patient;
	}

    public Doctor()
    {
    	
    }

	public Doctor(int id, String dname, String email, String contactno, String qualification, String gender,
			String bloodgroup, Date dateofjoin, String address, String speciality) {
		super();
		this.id = id;
		this.dname = dname;
		this.email = email;
		this.contactno = contactno;
		this.qualification = qualification;
		this.gender = gender;
		this.bloodgroup = bloodgroup;
		this.dateofjoin = dateofjoin;
		this.address = address;
		this.speciality = speciality;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContact_no(String contactno) {
		this.contactno = contactno;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
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

	public void setBlood_group(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public Date getDateofjoin() {
		return dateofjoin;
	}

	public void setDatofjoin(Date dateofjoin) {
		this.dateofjoin = dateofjoin;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
    
    

}

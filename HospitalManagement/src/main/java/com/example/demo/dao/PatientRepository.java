package com.example.demo.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.Patient;



@RepositoryRestResource(path="patient")
@CrossOrigin("http://localhost:4200/")
	
public interface PatientRepository extends JpaRepository<Patient, Integer>  {
	
	List<Patient> findByPnameIgnoreCase(String pname);
Page<Patient>findByDoctorId(@RequestParam("id")Integer id,Pageable pageable);
	
	

}

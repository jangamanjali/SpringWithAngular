import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctor:Doctor[]
  
  constructor(public patientService:PatientServiceService) 
  { 
    
  }

  ngOnInit(): void {
    this.getAllDoctors();
    
  }

  getAllDoctors():void{
    this.patientService.getAllDoctors().subscribe(data=>{
      console.log(data);
      this.doctor= data;
    });
  
  }
}

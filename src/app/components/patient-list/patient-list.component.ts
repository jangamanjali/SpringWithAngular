import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/common/patient';
import { PatientServiceService } from 'src/app/patient-service.service';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:Patient[];
  hasdoctortId : boolean;
  hasSearchName:any;
  searchName:string;
    constructor(private patientService:PatientServiceService,public activateRoute :ActivatedRoute,private route:Router) 
    {
  
     }
 

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getAllPatient());
  }


  getAllPatient():void
  {
    this.hasSearchName  = this.activateRoute.snapshot.paramMap.get("pname");
    console.log(this.hasdoctortId)
    this.hasdoctortId= this.activateRoute.snapshot.paramMap.has("doctorId");

    if(this.hasdoctortId){
      const doctorId = +(this.activateRoute.snapshot.paramMap.get("doctorId"));
      this.patientService.getAllPatientByDoctor(doctorId).subscribe(data=>{
        console.log(data);
        this.patients= data
      })
    }

   else if(this.hasSearchName)
    {
      this.searchName  = this.activateRoute.snapshot.paramMap.get("pname");
      console.log(this.searchName)
    this.patientService.getAllPatientsSearchByPname(this.searchName).subscribe(data=>{
      console.log(data);
      this.patients= data;
      console.log("hai")
    });
  }
else{

  
    this.patientService.getAllPatient().subscribe(data=>{
      console.log(data);
      this.patients=data;
    });
  }
}
  addPatient():void{
    this.route.navigateByUrl("/patientform")
  }

  updatePatient(id : Number){
    this.route.navigateByUrl("/updatePatient/" +id);
  }
  deletePatient(id : Number)
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.patientService.deletePatient(id).subscribe(data=>{
        console.log(data);
        this.getAllPatient();
      })
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Patient } from 'src/app/common/patient';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
patients:Patient=new Patient(0,"kanchan","Mumbai","0",23,"female","A+",new Date(),0);
  isEditable: boolean;
  constructor(private patientService:PatientServiceService,public router:Router, public activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.patients);
    this.activateRoute.paramMap.subscribe(()=>this.getPatientById());//)
  }

  onSubmit(){
    console.log(this.patients);
    if(this.isEditable){
      this.patientService.updatePatient(this.patients).subscribe(data=>
        this.router.navigateByUrl("/patients"));
    }
    else{
    this.patientService.savePatient( this.patients ).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("/patients");
  }
  }

getPatientById()
{
  const patientID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(patientID);
  if(patientID> 0)
  {
    this.isEditable = true;
    this.patientService.getPatientById(patientID).subscribe(data=>{
      this.patients = data;
      console.log(this.patients)
    });
  }

  }
}

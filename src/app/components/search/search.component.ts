import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientServiceService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pname: string;
  
  constructor(public patientService:PatientServiceService,public route:Router,public activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.search());
  }
  search(){  
    
    this.route.navigateByUrl("/search/"+this.pname);
  }

}


import { Injectable } from '@angular/core';
import { Observable , map} from 'rxjs';
import { Patient } from './common/patient';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Doctor } from './common/doctor';
@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private patientURL="http://localhost:8080/api/patient";
  private docURL="http://localhost:8080/api/doctor";
  constructor(private httpClient:HttpClient)
  { 

  }

  getAllDoctors():Observable<Doctor[]>
   {
    return this.httpClient.get<getDoctorResponse>(this.docURL).pipe(map(response=>response._embedded.doctor))
   }

  getAllPatient():Observable<Patient[]>
   {
    return this.httpClient.get<getPatientResponse>(this.patientURL).pipe(map(response=> response._embedded.patients))
   }
   savePatient(patients:Patient):Observable<Patient>
   {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auto_token',
        'Access-control-Allow-Origin':'*'

      })
    };
    return this.httpClient.post<Patient>(this.patientURL,patients,httpOptions);
   }



   getPatientById(id:number):Observable<Patient>
   {
    const patientIDURl=this.patientURL+"/"+id;
   return this.httpClient.get<Patient>(patientIDURl);
   }


   updatePatient(patients:Patient):Observable<Patient>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.put<Patient>(this.patientURL+`/${patients.id}`,patients,httpOptions);
  }

  deletePatient (id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.httpClient.delete<Patient >(this.patientURL+`/${id}`,httpOptions);
  }


  getAllPatientsSearchByPname(pname : string) : Observable<Patient[]> {
    const searchURL = "http://localhost:8080/api/patient/search/findByPnameIgnoreCase?pname=" + pname;

    return this.httpClient.get<GetSearchByPname>(searchURL).pipe(map(response => response._embedded.patients));
  } 

  getAllPatientByDoctor(doctorId :number ): Observable<Patient[]>{
    const  doctorIdURL = "http://localhost:8080/api/patient/search/findByDoctortId?id="+ doctorId;
     
    return this.httpClient.get<getPatientResponse>(doctorIdURL)
     .pipe(map(response=>response._embedded.patients))
 
   }

  }
interface getPatientResponse
{
  _embedded:
  {
    patients:Patient[]
  }
}
interface GetSearchByPname{
  _embedded : {
    patients : Patient[]
  }
}

interface getDoctorResponse
{
  _embedded :{

doctor :Doctor[]
  }
}



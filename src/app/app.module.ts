import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';

const routes:Routes=[{path:'',component:WelcomeComponentComponent},{path:'patients',component:PatientListComponent},{path:'patientform',component:PatientFormComponent},{path : 'updatePatient/:id',component:PatientFormComponent},{path : 'search/:pname',component:PatientListComponent},{path :'patients/:doctorId',component :PatientListComponent}]
@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    WelcomeComponentComponent,
    SearchComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

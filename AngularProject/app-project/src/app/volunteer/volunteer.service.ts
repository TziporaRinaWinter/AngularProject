import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class VolunteerService {

  updateVolunteer?:Volunteer;
  
  constructor(private _http: HttpClient) {
    
  }
  getVolunteerFromServer = (): Observable<Volunteer[]> => {
    return this._http.get<Volunteer[]>("http://localhost:5000/api/Volunteer/GetAll");
  }

  setVolunteerInServer = (volunteer:Volunteer): Observable<Volunteer[]> => {
    return this._http.put<Volunteer[]>(`http://localhost:5000/api/Volunteer/Update/${volunteer.id}`,volunteer);
  }

}

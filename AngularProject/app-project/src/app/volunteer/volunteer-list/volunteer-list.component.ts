import { Component } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrl: './volunteer-list.component.scss'
})

export class VolunteerListComponent {

  constructor(private _serviceVol: VolunteerService, private _router: Router){

    this._serviceVol.getVolunteerFromServer().subscribe((val) => {
      this.volunteerArr = val;
    })
  }

  volunteerArr:Volunteer[] =[];

  navigateToEdit = (volunteer:Volunteer)=>{
    this._router.navigate(['/volunteer-edit',volunteer.id]);
  }
}

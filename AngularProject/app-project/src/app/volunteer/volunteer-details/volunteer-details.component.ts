import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { VolunteerService } from '../volunteer.service';
import { SchedulingService } from '../../scheduling/scheduling.service';
import { Schedule } from '../../scheduling/scheduling.model';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrl: './volunteer-details.component.scss'
})
export class VolunteerDetailsComponent implements OnInit {

  volForm: FormGroup = new FormGroup({})
  myVolunteer: Volunteer = new Volunteer();
  myId: number = 0;

  daysOfWeek: string[] = [
    "Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday"
  ];
  allVolunteers: Volunteer[] = [];
  _sched?: Schedule;
  flag: boolean = false;

  constructor(private _acr: ActivatedRoute, private _serviseVol: VolunteerService, private _router: Router, private _serviceSchedule: SchedulingService) {
    this._serviseVol.getVolunteerFromServer().subscribe((val) => {
      this.allVolunteers = val;
      this.myId = +(this._acr.snapshot.paramMap.get('id') ?? '');
      this.myVolunteer = this.allVolunteers[this.myId - 1];
      this.volForm = new FormGroup({
        "id": new FormControl(this.myVolunteer.id),
        "fname": new FormControl(this.myVolunteer.fname, [Validators.required, Validators.minLength(3)]),
        "lname": new FormControl(this.myVolunteer.lname, [Validators.required, Validators.minLength(3)]),
        "src": new FormControl(this.myVolunteer.src, [Validators.required, Validators.minLength(3)]),
        "dest": new FormControl(this.myVolunteer.dest, [Validators.required, Validators.minLength(3)]),
        "phone": new FormControl(this.myVolunteer.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
        days: new FormArray([new FormControl(this.myVolunteer.days[0]),
        new FormControl(this.myVolunteer.days[1]),
        new FormControl(this.myVolunteer.days[2]),
        new FormControl(this.myVolunteer.days[3]),
        new FormControl(this.myVolunteer.days[4]),
        new FormControl(this.myVolunteer.days[5])
        ])
      });
      this.flag = true;
    })
    this._serviceSchedule.getScheduleFromServer().subscribe(data => {
      this._sched = data;
      this.flag = true;
    })
  }

  get days(): FormArray {
    return this.volForm.get('days') as FormArray;
  }
  ngOnInit() {

  }

  saveVolunteer = () => {
    try {
      if (this.myVolunteer != undefined) {
        this.myVolunteer = this.volForm.value;
      }
      if (this._sched?.idForDay != undefined) {
        for (let i = 0; i < this._sched?.idForDay.length; i++) {
          if (this.myVolunteer?.id == this._sched.idForDay[i] && this.myVolunteer.days[i] == false) {
            throw new Error("the update is unavailable");
          }
        }
      }
      this._serviseVol.setVolunteerInServer(this.myVolunteer).subscribe(data => {
        this.allVolunteers = data;
      });
      this._router.navigate(['/volunteer-list']);
    }
    catch (err) {
      alert(err);
      this._router.navigate(['/volunteer-list']);
    }
  }
}

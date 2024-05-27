import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../../volunteer/volunteer.service';
import { Volunteer } from '../../volunteer/volunteer.model';
import { SchedulingService } from '../scheduling.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Schedule } from '../scheduling.model';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.scss'
})
export class SchedulingComponent implements OnInit {

  _daysOfWeek: string[] = [
    "Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday"
  ];
  scheduleForm: FormGroup = new FormGroup({});
  flag: boolean = false;
  constructor(private _serviceSchedule: SchedulingService, private _serviceVol: VolunteerService) {
    this._serviceVol.getVolunteerFromServer().subscribe((val) => {
      this._volARR = val;
    });
    this._serviceSchedule.getScheduleFromServer().subscribe(data => {
      this._schedARR = data;
      this.scheduleForm = new FormGroup({
        "idForDay": new FormArray(
          this._schedARR.idForDay.map(id => new FormControl(id))
        )
      });
      this.flag = true;
    })
  }
  ngOnInit(): void {

  }
  _volARR: Volunteer[] = [];
  _schedARR: Schedule = new Schedule;

  get idForDay(): FormArray {
    return this.scheduleForm.get('idForDay') as FormArray;
  }

  getVolunteerPerDay(day: number): Volunteer[] {
    return this._volARR.filter(v => v?.days[day] == true);
  }

  saveSchedule() {
    console.log();
    this._serviceSchedule.setScheduleInServer(this.scheduleForm.value).subscribe(data =>{
      this._schedARR = data;
      alert("the scheduling saved successfull!!!!");
    })
  }

}

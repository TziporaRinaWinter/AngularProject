import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { Route, RouterModule } from '@angular/router';
import { SchedulingService } from './scheduling.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const SCHEDULE_ROUTES: Route[] = [
  {path:"scheduling", component: SchedulingComponent}
];

@NgModule({
  declarations: [SchedulingComponent],
  providers:[SchedulingService],
  imports: [
    CommonModule,RouterModule.forChild(SCHEDULE_ROUTES),HttpClientModule,ReactiveFormsModule
  ],
  exports:[SchedulingComponent]
})
export class SchedulingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VolunteerModule } from './volunteer/volunteer.module';
import { SchedulingModule } from './scheduling/scheduling.module';

const APP_ROUTES: Route[] = [
  {path:"volunteer", component: VolunteerModule},
  {path:"scheduling", component: SchedulingModule}
];

@NgModule({
  declarations: [AppComponent],
  providers:[],
  imports: [
    CommonModule,BrowserModule,RouterModule.forRoot(APP_ROUTES),VolunteerModule,SchedulingModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { VolunteerService } from './volunteer.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

const VOLUNTEER_ROUTES: Route[] = [
  {path:"volunteer-list", component: VolunteerListComponent},
  {path:"volunteer-edit/:id", component: VolunteerDetailsComponent}
];


@NgModule({
  declarations: [VolunteerListComponent, VolunteerDetailsComponent],
  providers: [VolunteerService],
  imports: [
    CommonModule,HttpClientModule,BrowserModule,ReactiveFormsModule,RouterModule.forChild(VOLUNTEER_ROUTES)
  ],
  exports:[VolunteerListComponent]
})
export class VolunteerModule {

}
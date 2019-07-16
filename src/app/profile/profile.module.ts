import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile.component";
import { RouterModule } from "@angular/router";
import {profileRoutes} from "./profile.routes";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    FormsModule,
    FormsModule
  ]
})
export class ProfileModule { }

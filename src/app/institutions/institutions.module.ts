import { FormsModule } from '@angular/forms';
import { InstitutionDetailsComponent } from './institution-details/institution-details.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { institutionRoutes } from './institutions.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InstitutionsComponent } from './institutions.component';
import { BranchesDetailComponent } from "./institution-details/branches-detail/branches-detail.component";
import { PersonalDetailComponent } from "./institution-details/branches-detail/personal-detail/personal-detail.component";


@NgModule({
  declarations: [
    InstitutionsComponent,
    CreateFormComponent,
    InstitutionDetailsComponent,
    BranchesDetailComponent,
    PersonalDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(institutionRoutes),
    FormsModule
  ],
})
export class InstitutionsModule { }

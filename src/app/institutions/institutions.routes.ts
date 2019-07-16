import {InstitutionsComponent} from './institutions.component';
import {CreateFormComponent} from './create-form/create-form.component';
import {InstitutionDetailsComponent} from './institution-details/institution-details.component';
import {BranchesDetailComponent} from "./institution-details/branches-detail/branches-detail.component";
import {Route} from "@angular/router";

export const institutionRoutes: Route[] = [
  {
    path: '',
    component: InstitutionsComponent,
  },
  {
    path: 'institution/:id',
    component: InstitutionDetailsComponent,
    resolve: {

    }
  },
  {
    path: ':institutionID/:branchID',
    component: BranchesDetailComponent
  },
  {
    path: 'addInstitution',
    component: CreateFormComponent
  },
];

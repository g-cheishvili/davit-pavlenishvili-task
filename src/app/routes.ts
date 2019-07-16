import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'profile/login', pathMatch: 'full' },
  { path: 'institutions', loadChildren: './institutions/institutions.module#InstitutionsModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' }
];

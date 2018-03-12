import { NgModule } from '@angular/core';
import { SchoolFormComponent } from '../school-form/school-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from '../school/school.component';
import { SchoolDetailComponent } from '../school-detail/school-detail.component';
import { SchoolEditComponent } from '../school-edit/school-edit.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'addSchool', component: SchoolFormComponent },
  {
    path: 'schools',
    component: SchoolComponent,
    data: { title: 'School List' }
  },
  {
    path: 'school-details/:id',
    component: SchoolDetailComponent,
    data: { title: 'School Details' }
  },
  {
    path: 'school-edit/:id',
    component: SchoolEditComponent,
    data: { title: 'School Edit' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile' },
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

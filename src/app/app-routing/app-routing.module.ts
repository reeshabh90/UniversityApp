import { NgModule } from '@angular/core';
import { SchoolFormComponent } from '../school-form/school-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from '../school/school.component';
import { SchoolDetailComponent } from '../school-detail/school-detail.component';
import { SchoolEditComponent } from '../school-edit/school-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
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
    data: {title: 'School Edit'}
  },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

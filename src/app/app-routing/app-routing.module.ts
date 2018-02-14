import { NgModule } from '@angular/core';
import { SchoolFormComponent } from '../school-form/school-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'addSchool', component: SchoolFormComponent },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

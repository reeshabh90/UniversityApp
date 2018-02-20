import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SchoolDataService } from './services/school-data.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolFormComponent,
    SchoolComponent,
    SchoolDetailComponent,
    SchoolEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SchoolDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

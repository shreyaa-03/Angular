import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PoepleComponent } from './user/poeple/poeple.component';

import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { StudentComponent } from './user/student/student.component';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [StudentComponent, PoepleComponent, AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ provideAnimationsAsync()],
  bootstrap: [AppComponent, PoepleComponent],
})
export class AppModule {}

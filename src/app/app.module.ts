import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PoepleComponent } from './user/poeple/poeple.component';
import { FilterPipeComponent } from './user/filter-pipe/filter-pipe.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './user/Pipes/filter.pipe';
import { StudentComponent } from './user/student/student.component';

@NgModule({
  declarations: [
    StudentComponent,
    AppComponent,
    PoepleComponent,
    FilterPipeComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, PoepleComponent],
})
export class AppModule {}

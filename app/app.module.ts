import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person/person-detail.component';
import { PersonListComponent } from './person/person-list.component';
import { PersonsOnGithubComponent } from './person/persons-on-github.component';
import { PersonFilter } from './person/person-filter.pipe';
import { PersonDetailGuard } from './person/person-guard.service';
import { PersonService } from './person/person.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonsOnGithubComponent,
    PersonFilter
  ],
  providers: [
    PersonService,
    PersonDetailGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { AboutComponent } from './Components/about/about.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

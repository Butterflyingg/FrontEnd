import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './geral/header/header.component';
import { HomeIntroComponent } from './home/home-intro/home-intro.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { PassComponent } from './pages/pass/pass.component';
import { BodyPassComponent } from './pass/body-pass/body-pass.component';
import { CardPassComponent } from './pass/card-pass/card-pass.component';
import { TrainingComponent } from './pages/training/training.component';
import { BodyTrainingComponent } from './training/body-training/body-training.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeIntroComponent,
    AboutComponent,
    ContactComponent,
    PassComponent,
    BodyPassComponent,
    CardPassComponent,
    TrainingComponent,
    BodyTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

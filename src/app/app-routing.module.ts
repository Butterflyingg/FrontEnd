import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PassComponent } from './pages/pass/pass.component';
import { TrainingComponent } from './pages/training/training.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

  {path: "home", component: HomeComponent},
  { path: 'sobre', component: HomeComponent },
  { path: 'contato', component: HomeComponent },
  {path: '', component: HomeComponent},
  {path: 'passaporte', component: PassComponent},
  {path: 'treinamento', component: TrainingComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

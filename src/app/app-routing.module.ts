import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PassComponent } from './pages/pass/pass.component';

const routes: Routes = [

  {path: "home", component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'passaporte', component: PassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

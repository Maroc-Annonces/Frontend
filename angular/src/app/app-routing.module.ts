import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./postuleur/home/home.component";
import {PostulationComponent} from "./postuleur/postulation/postulation.component";
import {DashboardAgentComponent} from "./agent/dashboard/dashboard.component";
import {LoginAgentComponent} from "./agent/login/login.component";
import {DashboardSosieteComponent} from "./sosiete/dashboard/dashboard.component";
import {PostComponent} from "./sosiete/post/post.component";
import {LoginSosieteComponent} from "./sosiete/login/login.component";
import {AddPostComponent} from "./sosiete/add-post/add-post.component";
import {EditPostComponent} from "./sosiete/edit-post/edit-post.component";
import {RegisterComponent} from "./sosiete/register/register.component";
import {PostuleurComponent} from "./sosiete/postuleur/postuleur.component";
import {ValidationComponent} from "./sosiete/validation/validation.component";


const routes: Routes = [
  // Postuleur routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'PO', component: HomeComponent },
  { path: 'PO/Home', component: HomeComponent },
  { path: 'PO/Postulation/:id', component: PostulationComponent },

  // Agent routes
  { path: 'AG', component: LoginAgentComponent },
  { path: 'AG/Dashboard', component: DashboardAgentComponent },
  { path: 'AG/Login', component: LoginAgentComponent },

  // Sosiete routes
  { path: 'SO', component: LoginSosieteComponent },
  { path: 'SO/Dashboard', component: DashboardSosieteComponent },
  { path: 'SO/Post', component: PostComponent },
  { path: 'SO/Add-Post', component: AddPostComponent },
  { path: 'SO/Edit-Post/:id', component: EditPostComponent },
  { path: 'SO/Login', component: LoginSosieteComponent },
  { path: 'SO/Register', component: RegisterComponent },
  { path: 'SO/Postuleur', component: PostuleurComponent },
  { path: 'SO/Validation/:email', component: ValidationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

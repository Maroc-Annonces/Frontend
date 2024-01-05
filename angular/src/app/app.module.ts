import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAgentComponent } from './agent/login/login.component';
import {HomeComponent} from "./postuleur/home/home.component";
import {DashboardAgentComponent} from "./agent/dashboard/dashboard.component";
import {PostulationComponent} from "./postuleur/postulation/postulation.component";
import {AddPostComponent} from "./sosiete/add-post/add-post.component";
import {DashboardSosieteComponent} from "./sosiete/dashboard/dashboard.component";
import {EditPostComponent} from "./sosiete/edit-post/edit-post.component";
import {LoginSosieteComponent} from "./sosiete/login/login.component";
import {PostComponent} from "./sosiete/post/post.component";
import {RegisterComponent} from "./sosiete/register/register.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PostuleurComponent } from './sosiete/postuleur/postuleur.component';
import { ValidationComponent } from './sosiete/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAgentComponent,
    RegisterComponent,
    HomeComponent,
    DashboardAgentComponent,
    PostulationComponent,
    AddPostComponent,
    DashboardSosieteComponent,
    EditPostComponent,
    LoginSosieteComponent,
    PostComponent,
    PostuleurComponent,
    ValidationComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

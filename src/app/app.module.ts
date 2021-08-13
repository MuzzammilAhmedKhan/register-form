import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes =[
{path:'register',component:RegistrationFormComponent},
{path:'login',component:LoginFormComponent},
{path:'welcome',component:WelcomePageComponent},
{path:'', component:RegistrationFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

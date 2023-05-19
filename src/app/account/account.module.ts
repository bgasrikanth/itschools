import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PwdrecoveryComponent } from './pwdrecovery/pwdrecovery.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ErrorComponent } from './error/error.component';

const route:Routes=[
  {path:'', redirectTo:'/default', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'pwdrecovery', component:PwdrecoveryComponent},
  {path:'default', component:DefaultComponent},
  {path:'**', component:ErrorComponent}
]



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PwdrecoveryComponent,
    DefaultComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AccountModule { }

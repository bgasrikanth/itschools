import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';

const route:Routes=[
  {path:'welcome', component:WelcomeComponent}
]



@NgModule({
  declarations: [
    WelcomeComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class DashModule { }

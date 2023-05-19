import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountModule } from './account/account.module';
import { DashModule } from './dash/dash.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountModule,
    DashModule,
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

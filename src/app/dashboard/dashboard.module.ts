import { AuthGuardService } from './../gaurds/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { dashboardRoutes } from './dashboard.route';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [LayoutComponent, HomeComponent],
  providers : [AuthGuardService]
})
export class DashboardModule { }

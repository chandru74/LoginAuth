import { AuthGuardService } from './../gaurds/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { Routes } from '@angular/router';


export const dashboardRoutes : Routes =[
    {path : 'dashboard', 
    component : LayoutComponent,
    canActivate : [AuthGuardService],
    children : [
        {path : '', redirectTo : 'home', pathMatch : 'full'},
        {path : 'home', component : HomeComponent}
    ]
}

]

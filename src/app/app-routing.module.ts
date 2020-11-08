import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogCoffeeComponent } from './coffee-card/log-coffee/log-coffee.component'
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'logcoffee', component: LogCoffeeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

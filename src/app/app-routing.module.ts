import { UsersDashboardModule } from './users-dashboard/users-dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path : '',component:HomeComponent},
  {path : 'admin', loadChildren:()=> import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)},
  {path: 'user',loadChildren:()=> import('./users-dashboard/users-dashboard.module').then(m => m.UsersDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

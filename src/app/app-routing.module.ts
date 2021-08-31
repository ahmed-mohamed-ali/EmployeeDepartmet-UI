import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'serverError', component: InternalServerErrorComponent},
  {path: 'Edit/:id', component: EditComponent},
  {path:'error',component:ErrorComponent},
  {path:'**',redirectTo: '/error', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

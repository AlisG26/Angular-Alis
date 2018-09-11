import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { EmployeesService } from './services/employees.service'
import { AuthGuard } from './services/auth.guard.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees',
    canActivate: [AuthGuard],
     component: EmployeesComponent,
    children: [
      {path: ':id', component: EmployeeComponent},
      {path: ':id/edit', component: EditEmployeeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent,
    EditEmployeeComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeesService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }

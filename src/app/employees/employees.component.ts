import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: {
    name: string, age: number, charge: string, state: string
  } [] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees = this.employeesService. employees;
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: {name: string, age: number, charge: string, state: string};
  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; 
    this.employee = this.employeesService.getEmployee(+id);
    this.route.params.subscribe(
      (params: Params) => {
        this.employee = this.employeesService.getEmployee(+params['id']);
      }

    );
  }

}

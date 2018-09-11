import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  name: string;
  age: number;
  charge: string;
  state: string;
  id: number;
  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const employee = this.employeesService.getEmployee(+id);
    this.id = +id;
    this.name = employee.name;
    this.age = employee.age;
    this.charge = employee.charge;
    this.state = employee.state;
  }

  saveChanges() {
    this.employeesService.setEmployee(this.id , {
      name: this.name,
      age: this.age,
      charge: this.charge,
      state: this.state
    });
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}

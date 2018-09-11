import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: {name: string, age: number, charge: string, state: string}
  id: number
  constructor(private employeesService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; 
    this.employee = this.employeesService.getEmployee(this.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.employee = this.employeesService.getEmployee(this.id);
      }

    );
  }

  onEdit() {
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['/employees', this.id, 'edit'])
  }
}

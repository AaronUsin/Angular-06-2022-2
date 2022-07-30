import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: any[]=[];
  employeess: Employee[]=[]
  form: FormGroup;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(employeesFromAPI => {
      this.employees = employeesFromAPI.data;
    })
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: [''],
      name: [''],
      email: [''],
      avatar: ['']
    });
  }

  addEmployee(): void {
    // TODO: Add an employee to the table
  }

  deleteEmployee(employee: Employee): void {
    // TODO: Delete an employee from the table
    const index = this.employeess.indexOf(employee);
    console.log(index)
    console.log(this.employeess)
    this.employeess.splice(index,1);
    console.log(this.employeess)
  }
}

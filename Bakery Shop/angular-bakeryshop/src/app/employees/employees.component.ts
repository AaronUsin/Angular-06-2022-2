import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
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

  addEmployee(form: any): void {
    // TODO: Add an employee to the table
    let employees = [];
    let employeesLS = localStorage.getItem("employees");
    if (employeesLS !== null){
      employees = JSON.parse(employeesLS);
    }
    employees.push(form.value);
  localStorage.setItem("employees", JSON.stringify(employees));
  }

  deleteEmployee(employee: any): void {
    // TODO: Delete an employee from the table
  }
}

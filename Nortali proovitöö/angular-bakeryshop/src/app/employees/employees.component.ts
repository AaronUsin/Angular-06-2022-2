import { HttpClient } from '@angular/common/http';
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
  
 employees: Employee[]=[];
 private employeeDbURL = "https://reqres.in/api/users"
 private originalEmployees: Employee[]=[];
  form: FormGroup;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.initForm();
    this.http.get<Employee[]>(this.employeeDbURL).subscribe(employeesFromDb => {
      this.employees = employeesFromDb;
      this.originalEmployees = employeesFromDb
    });
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

  deleteEmployee(employee): void {
    // TODO: Delete an employee from the table
  }
}

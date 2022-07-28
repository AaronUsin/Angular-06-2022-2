import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeFromDb = "https://reqres.in/api/users"

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<Employee[]>(this.employeeFromDb);; // TODO: Load data from backend service
  }
}

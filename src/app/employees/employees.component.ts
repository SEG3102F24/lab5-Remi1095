import { Component, inject } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe],
})
export class EmployeesComponent {
    protected employees$: Observable<Employee[]>; // Using observable to fetch employees

    constructor(private employeeService: EmployeeService) {
        this.employees$ = this.employeeService.getEmployees(); // Fetch employees on initialization
        console.log(this.employees$);
    }

    convertTimestampToDate(timestamp: { seconds: number; nanoseconds: number }): Date {
        return new Date(timestamp.seconds * 1000);
      }
}

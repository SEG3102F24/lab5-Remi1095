import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Employee } from "../model/employee";
import {
    Firestore,
    collection,
    collectionData,
    addDoc,
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private firestore: Firestore = inject(Firestore);

    // employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);
    // get $(): Observable<readonly Employee[]> {
    //     return this.employees$;
    // }

    // addEmployee(employee: Employee) {
    //     this.employees$.next([...this.employees$.getValue(), employee]);
    //     return true;
    // }

    getEmployees(): Observable<Employee[]> {
        const employees = collection(this.firestore, 'employees');
        const employeeCollection = collectionData(employees, { idField: 'id' });
        return employeeCollection as Observable<Employee[]>;
    }

    addEmployee(employee: Employee) {
        const employees = collection(this.firestore, 'employees');
        const employeeData = { ...employee }; // Convert to a plain object
        delete employeeData.id; // Ensure the id is not included in the data
        return addDoc(employees, employeeData);
    }
}

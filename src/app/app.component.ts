import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'developer';
  employees: any;
  constructor(private employee:EmployeeService){}

  addEmployee(){
  return this.employee.getEmployee.get("https://jsonplaceholder.typicode.com/users")
  }
}

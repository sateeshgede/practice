import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
url:string="https://jsonplaceholder.typicode.com/users";
 
  constructor(private http:HttpClient) { }
  getEmployee(){
 this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
}

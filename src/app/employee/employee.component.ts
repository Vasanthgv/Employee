import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employee:Employee[]=[];
  constructor(private http:HttpClient){}
  getEmp(){
    return this.http.get<Employee[]>("http://localhost:8080/map");
  }
  ngOnInit() {
    return this.getEmp().subscribe(x=>this.employee=x)
  }
 
}

class Employee{
  name ?: string ;
  age ?:number;
  salary?:number;
  gender?:string;
  designation?:string;
  //  constructor(name: string, age:number,salary:number, gender:string,designation:string){
  //    this.name=name;
  //   }
  
}

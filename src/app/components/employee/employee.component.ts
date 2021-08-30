import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input("empInfo") employee
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.employee);

  }
  getDetials(employeeId){
console.log(employeeId);
this.router.navigate(['employee',employeeId])
  }

}

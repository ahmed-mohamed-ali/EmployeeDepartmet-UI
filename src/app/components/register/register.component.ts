import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee
  departments: any;
  subscriber: any;
  registerSucceed: boolean;
  constructor(private APIservice:APIService,private router:Router) { }

  ngOnInit(): void {
    this.registerSucceed=false;
    this.employee={
      "FirstName": "",
        "LastName": "",
        "PhoneNumber": "",
        "DOB": new Date(),
        "DepartmentId":""
    }

    // get Department
    this.subscriber=this.APIservice.getDepartments().subscribe(
      
      res=>{
        let response=res;
        this.departments=response
        console.log(this.departments)
      },
      err=>{
        console.log(err);
        this.router.navigate(['serverError'])
      }
      )
  }

  onSubmit(form: NgForm) {
   
    console.log(form.value);
    let emp ={
      "FirstName": form.value.fname,
        "LastName": form.value.lname,
        "PhoneNumber": form.value.pnum,
        "DOB": form.value.DOB,
        "DepartmentId":form.value.DepartmentId
    }
    this.APIservice.CreateEmployee(emp).subscribe(
      
      res=>{
        // let response=res;
        // this.departments=response
        // console.log(this.departments)
        this.registerSucceed=true
        this.router.navigate(['/'])
      },
      err=>{
        console.log(err);
        this.router.navigate(['serverError'])
      }
      )
  }

}

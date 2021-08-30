import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employeeId: any;
  subscriber: any;
  Employee: any={};
  employee: { FirstName: string; LastName: string; PhoneNumber: string; DOB: Date; DepartmentId: string; };
  departments: Object;

  constructor(private route:ActivatedRoute,private APIservice:APIService,private router:Router) { }

  ngOnInit(): void {
     // get Id from route
     this.employeeId=this.route.snapshot.params['id'];
     console.log(this.employeeId)
     this.route.params.subscribe(params => {
       this.employeeId = params['id'];
       console.log(this.employeeId)

      
     });

      // get emp info
    this.subscriber=this.APIservice.getEmployeeById(this.employeeId).subscribe(
      
      res=>{
        let response=res;
       
        this.Employee=response

        console.log(this.Employee)
        this.employee={
          "FirstName": this.Employee.FirstName,
            "LastName": this.Employee.LastName,
            "PhoneNumber":this.Employee.PhoneNumber,
            "DOB":this.Employee.DOB,
            "DepartmentId":this.Employee.DepartmentId
        }
      },
      err=>{
        console.log(err)
        this.router.navigate(['serverError'])
       
      }
      )
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
      "Id":this.employeeId,
      "FirstName": form.value.fname,
        "LastName": form.value.lname,
        "PhoneNumber": form.value.pnum,
        "DOB": this.formatDate(form.value.DOB),
        "DepartmentId":form.value.DepartmentId
    }
    console.log(emp);
    this.APIservice.EditEmployee(this.employeeId,emp).subscribe(
      
      res=>{
        let response=res;
       
        console.log(response)
       
        this.router.navigate(['/'])
      },
      err=>{
        console.log(err);
        this.router.navigate(['serverError'])
      }
      )
  }

  private formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
}

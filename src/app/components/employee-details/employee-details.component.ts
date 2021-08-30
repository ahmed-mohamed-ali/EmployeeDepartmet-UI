import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeId:number
  subscriber: any;
  Employee:any
  constructor(private route: ActivatedRoute,private APIservice:APIService,private router:Router) { 
    
  }

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
      },
      err=>{
        console.log(err)
        this.router.navigate(['serverError'])
       
      }
      )
  }
  Edit(){
    this.router.navigate(['Edit',this.employeeId])
  }
  Delete(){
    this.APIservice.DeleteEmployee(this.employeeId).subscribe(
      
      res=>{
        let response=res;
        console.log(response)
        this.router.navigate(['/'])

      },
      err=>{
        console.log(err)
        this.router.navigate(['serverError'])
       
      }
      )
  }

}

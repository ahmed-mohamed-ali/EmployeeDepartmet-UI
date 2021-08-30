import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscriber
  Employees
  constructor(private APIservice:APIService,private router:Router) { }

  ngOnInit(): void {
  
    this.subscriber=this.APIservice.getEmployees().subscribe(
      
      res=>{
        let response=res;
        this.Employees=response
        console.log(this.Employees)
      },
      err=>console.log(err)
      )

  }
  register(){
this.router.navigate(['register'])
  }

}

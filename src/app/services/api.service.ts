import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ApiURl:String="http://localhost:13798"  
  constructor(private httpclient:HttpClient) { }
  getEmployees(){
   
    return  this.httpclient.get(`${this.ApiURl}/api/Employee/`)
  }

  getDepartments(){
   
    return  this.httpclient.get(`${this.ApiURl}/api/Department/`)
  }
  getEmployeeById(id:number){

    return  this.httpclient.get(`${this.ApiURl}/api/Employee/${id}`)
  }

  CreateEmployee(employee){
    return  this.httpclient.post(`${this.ApiURl}/api/Employee/`,employee)
  }
  EditEmployee(id,employee){
    return  this.httpclient.put(`${this.ApiURl}/api/Employee/${id}`,employee)
  }

  DeleteEmployee(id){
    return  this.httpclient.delete(`${this.ApiURl}/api/Employee/${id}`)
  }

}

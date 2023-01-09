import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

      
    
id=5;
  customers=[
    { id:1,
      "firstName":"Manoj",
      "lastName": "kumar",
      "sex": "Male",
      "skill":"Java FSD",
      "userName": "manoj@gmail.com",
      "email":"manoj@gmail.com",
      "address":"flat No:103 ",
      "address2": "Marthali",
      "city":"Bangolore",
      "state":"Karntaka",
      "pincode":500346

    },
    { id:2,
      "firstName":"Mani",
      "lastName": "kumar",
      "sex": "Male",
      "skill":"Java Backend",
      "userName": "Mani@gmail.com",
      "email":"Mani@gmail.com",
      "address":"flat No:203 ",
      "address2": "Silkboard",
      "city":"Bangolore",
      "state":"Karnataka",
      "pincode":560076

    },

    { id:3,
      "firstName":"Hemanth",
      "lastName": "K",
      "sex": "Male",
      "skill":"Manual testing",
      "userName": "Hemanth@gmail.com",
      "email":"Hemanth@gmail.com",
      "address":"flat No:303 ",
      "address2": "Bellandur",
      "city":"Bangolore",
      "state":"Karnataka",
      "pincode":500016

    },
    { id:4,
      "firstName":"Raghu",
      "lastName": "K",
      "sex": "Male",
      "skill":"Automation testing",
      "userName": "Raghu@gmail.com",
      "email":"Raghu@gmail.com",
      "address":"flat No:403 ",
      "address2": "Sarjapur",
      "city":"Bangolore",
      "state":"Karnataka",
      "pincode":500016

    }
  ]

  url = "http://localhost:8081/customers"

  constructor(private http:HttpClient) { }

  fetchCustomers(){
    
   return this.http.get(this.url)
  }

  deleteCustomer(id){
   return this.http.delete(this.url +"/"+ id)
  }

  postCustomer(customer:CustomerService):Observable<Object>{
  return  this.http.post(this.url,customer);
  console.log(customer);

  }

  putCustomer(customer:CustomerService):Observable<Object>{
   return this.http.put(this.url,customer)
  }

  addtocustomer(customer:CustomerService){
    this.customers.push({id:this.id++, 
      'firstName':customer.firstName,
      'lastName':customer.lastName,
      'sex': customer.sex,
      'skill':customer.skill,
      'userName': customer.userName,
      'email':customer.email,
      'address':customer.address,
      'address2': customer.address2,
      'city':customer.city,
      'state':customer.state,
      'pincode':customer.pincode,
    });
  }

  deleteCustomerThroughIndex(index){
  
      this.customers.splice(index,1); 
    
  }

  
}

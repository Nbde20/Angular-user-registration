import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: Person=new Person("","",0,"");
  person: Person=new Person("nb","nb@g.com",0,"sde");
  name:any;
  message:any;

  constructor(private service:UserRegistationService) { }

  ngOnInit() {
  }
  

  public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }

  public test(){
  this.person.name;
      }


}

export class Person{
  name: any;
  email:any;
  experience:any;
   domain:any;
  constructor(
      name:string,
      email:string,
      experience:number,
      domain:string,
      id?:number

  ){
    this.name=name;
    this.email=email;
    this.experience=experience;
    this.domain=domain;
  }
}

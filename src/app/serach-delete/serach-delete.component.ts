import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

  users:any;
  email:string;
  
  constructor(private service:UserRegistationService,private router: Router,private route: ActivatedRoute) { }


public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data)=>this.users=data);
}

public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data)=>this.users=data);
 }

 public updateUser(id:number)
 {
   let user;
   for(let ele of this.users){
     if( ele["id"] == id){
       user = ele;
       console.log(ele);
     }
   }
  //  this.service.userFetched.next(user);
  //  this.service.passUser(user);
   this.router.navigate(['update', user.id, user.name,user.email, user.experience,user.domain ]);
 }

  ngOnInit() {
    
    let resp=this.service.getUsers();
    resp.subscribe((data)=>{console.log(this.users=data)});
  }

}

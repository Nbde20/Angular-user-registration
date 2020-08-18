import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  // userFetched= new Subject<User>();

  constructor(private http:HttpClient) { }

  // passUser(user: User){
  //   this.userFetched.next(user);
  // }

  public doRegistration(user){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){ 
    return this.http.get("http://localhost:9090/getAllUsers");
    
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }

  public updateUser(id,user) {
    // let payload={
    //   'user': user,
    //   'id':  id
    // }
  
    return this.http.put("http://localhost:9090/update/"+id,user,{responseType:'text' as 'json'});
    
  }
}

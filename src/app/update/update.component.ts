import { Component, OnInit, ViewChild } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  name:string;
  email:string;
  experience:number;
  domain:string;
  // user: any;
  constructor(private service:UserRegistationService, private router: Router,private route: ActivatedRoute) { }

  // @ViewChild('f', {static: true}) updateFrom : NgForm;

  ngOnInit() {
   
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.email = this.route.snapshot.params['email'];
    this.experience = this.route.snapshot.params['experience'];
    this.domain = this.route.snapshot.params['domain'];

    // let routeParams = this.route.snapshot.params;
    // console.log(routeParams.name);
    // this.updateFrom.form.patchValue({
    //   'name': routeParams.name,
    //   'email': routeParams.email,
    //   'experience': routeParams.experience,
    //   'domain': routeParams.domain,
    // });
    // this.user = new User(this.name,this.email,this.experience,this.domain);

    // this.serviCance.userFetched.subscribe((data)=>{
    //   this.user=data;
    //   console.log("Reached update component");
    //   console.log(data)
    // });
    

    // this.service.getUsers()
    //   .subscribe(data => {
    //     console.log(data)
    //     this.user = data;
    //   }, error => console.log(error));
  }

  public updateUser( form: NgForm) {

    let users = {
      name:form.value.name,
      email:form.value.email,
      experience:form.value.experience,
      domain: form.value.domain
    };
    console.log(form.value);
    // for(let ele of this.user){
    //   if( ele["id"] == this.id){
    //     users = ele;
    //     console.log(ele);
    //   }
    // }
    this.service.updateUser(this.id,users)
      .subscribe(data => console.log(data), error => console.log(error));
      // this.user = new User(this.name,this.email,this.experience,this.domain);
    this.gotoList();
  }

  // onSubmit() {
  //   this.updateUser();    
  // }

  gotoList() {
    this.router.navigate(['search']);
  }

}

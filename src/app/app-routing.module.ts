import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"register",component:RegistrationComponent},
   {path:"search",component:SerachDeleteComponent},
   {path:"update/:id/:name/:email/:experience/:domain",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

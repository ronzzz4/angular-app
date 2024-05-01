import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(){

  }
  ngOnInit():void {

  }

  user_records: any[] = [];
  data={
    name:"",
    email:"",
    number:"",
    address:"",
    password:""
   }
doRegistration(Values:any) {
  this.user_records = JSON.parse(localStorage.getItem('users') || '{}') 

  if(this.user_records.some((v)=> {
    return v.email == this.data.email
  })){
    alert('User already exists!')
  }
  else {
    this.user_records.push(this.data)
    localStorage.setItem("users",JSON.stringify(this.user_records));
    alert('Hi '+this.data.name+" you have successfully registered!")
  }
}

}

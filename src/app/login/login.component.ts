import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }

  user_records:any[] = []

  data = {
    email:"",
    password:""
  }

doLogin(Values: any) {
  this.user_records = JSON.parse(localStorage.getItem('users') || '{}') 

  if(this.user_records.some((v)=>{
    return v.email == this.data.email && v.password == this.data.password;
  })){
    alert("Login Successful"),
    this.router.navigate(["/showuser"])
  }
  else {
    alert('Login failed!');
  }

}

}

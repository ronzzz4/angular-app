import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){

  }
loginBtn() {
  this.router.navigate(['login']);
}
showuserBtn() {
  this.router.navigate(['showuser']);

}
regBtn() {
  this.router.navigate(['register']);

}

}

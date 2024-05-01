import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed

@Component({
  selector: 'app-showuser',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.css'
})
export class ShowuserComponent {
  user_records:any[] = []
  data={
    name:"",
    email:"",
    number:"",
    address:"",
    password:""
  }

  constructor(){
    this.user_records = JSON.parse(localStorage.getItem('users') || '{}')
  }
}

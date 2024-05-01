import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path:"register", component:RegisterComponent },
    { path:"login", component:LoginComponent },
    { path:"showuser", component:ShowuserComponent },
    { path:"", component:HomeComponent },
];

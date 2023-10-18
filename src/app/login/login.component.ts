import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from '../Service/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User = new User();
  
  loginStatus: string|undefined|null = '' ;
  
  constructor(private userService : UserService) {}

  login(formData : any){
    console.log(formData);

      this.user.username = formData.value.username;
      this.user.password = formData.value.password;
        console.log(this.user);
      this.loginStatus = localStorage.getItem('resMessage');
      this.userService.loginUser(this.user);  
    }

}

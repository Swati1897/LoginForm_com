import { Component } from '@angular/core';
import { User } from '../Service/User';
import { UserService } from '../Service/user.service';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();

  confirmPassword: any = '';
  signUpStatus = ''
  errorMessage = ''

  constructor(private userService : UserService ) {}

  save(formData : NgForm ){
    this.user.username = formData.value.username;
    this.user.dob = formData.value.dob;
    this.user.email = formData.value.email;
    this.user.password = formData.value.password;
    this.confirmPassword = formData.value.cpassword;

    console.log("SignUp User", this.user);

    if(this.user.password == this.confirmPassword ){
      this.userService.saveUser(this.user).subscribe( data =>{
        this.signUpStatus = data;

        console.log("signUpStatus==>", this.signUpStatus)
      })
    }else{
      this.errorMessage = "Password is not matched ..Please try again."
    }
  }


}

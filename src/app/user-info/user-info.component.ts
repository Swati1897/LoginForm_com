import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
//import { ActivatedRoute, Route } from '@angular/router';
 import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  condition: boolean = true;
  respData: string|undefined ;
  // currentRouter: ActivatedRoute | null | undefined;
  
  constructor( private userService : UserService, private route: Router, private currentRouter: ActivatedRoute) {}
  
  ngOnInit(): void {
    
    if (!localStorage.getItem('token')) {
      this.condition=false
      console.log("oninit")
       this.route.navigate(['../register'], {relativeTo: this.currentRouter});  
      }
   
   
   
    console.log(localStorage.getItem('token'))

    this.userService.userProfile().subscribe((respData : any)=>{
      this.respData = respData;
    });
    // localStorage.removeItem('token'); // token checked
 
  }

}

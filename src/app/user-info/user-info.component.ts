import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  respData: string|undefined ;
  
  constructor( private userService : UserService) {}
  
  ngOnInit(): void {
    
    this.userService.userProfile().subscribe((respData : any)=>{
      this.respData = respData;
    });

  }

}

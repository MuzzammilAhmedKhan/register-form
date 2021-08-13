import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  user:User = new User(0,'','','','','','','');
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //by default make the userType = buyer
    this.user.userType = "buyer";
    
    this.userService.saveUser(this.user)
    .subscribe(data => {console.log(data)});

    this.router.navigateByUrl("/login");

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users:User[] = [];
  errorMessage:string = "";
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(uname:string,pwd:string){
    console.log(uname,pwd);
    this.userService.verifyUser(uname,pwd).
    subscribe(data => {
      this.users = data
      console.log(this.users.length);
      if(this.users.length > 0){
        console.log(uname,pwd);
        this.errorMessage ="";
        this.router.navigateByUrl("/welcome");
      }else{
        this.errorMessage = "Incorrect Username/Password. Please check"
       this.router.navigateByUrl("/login");
      }
    });

    
  }
}

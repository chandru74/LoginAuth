import { AuthService } from './../services/auth.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User ={
    email: '',
    password: ''
  }
  constructor(private _authservice:AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(theUser:User){
    console.log(theUser);
    localStorage.setItem('user', theUser.email);
    this._authservice.login(theUser).subscribe((data)=>{
      console.log(data);
     
      this._router.navigate(['/dashboard'])
    });
    
  }

}

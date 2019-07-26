import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User ={
    fullName:'',
    email:'',
    password:''
  }
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  signup(tuser:User){
    console.log(tuser);
    this.authservice.register(tuser).subscribe((data)=>{
      console.log(data)
    })
  }

}

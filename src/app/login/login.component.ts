import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup;
  constructor(fb : FormBuilder, private loginService : LoginService,private _router: Router) {
    this.login = fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Form submited');
    this.loginService.authenticateUser(this.login).subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/dashboard'])
      }
    )
  }

}

import { Component } from '@angular/core';
import  *  as  data  from  './companySeedData.json';

import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardDrawerApp';
  brandName = data.name;
  constructor(private _router: Router){
    if(!data.isLoginRequired){
      this._router.navigate(['/dashboard']);
    }
  }
}

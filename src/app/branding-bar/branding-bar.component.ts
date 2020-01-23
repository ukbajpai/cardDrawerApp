import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import  *  as  data  from  './../companySeedData.json';
@Component({
  selector: 'app-branding-bar',
  templateUrl: './branding-bar.component.html',
  styleUrls: ['./branding-bar.component.css']
})
export class BrandingBarComponent implements OnInit {
  brandName = data.name;
  @Output() logoClick : EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  goBackToHome(){
    console.log("emitted event");
    this.logoClick.emit('000');
  }
  openSocialMedia(link : any){
    window.open(data.socialMediaLinks[link], "_blank");
  }
}

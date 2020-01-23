import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import  *  as  data  from  './../companySeedData.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  parentId : string = '000';
  parentName : string;
  isParentNode : boolean = true;
  nodes : any;
  brandName = data.name;
  constructor(private dashService : DashBoardService) {
    this.getNode(this.parentId);
   }
   getNode(id: any){
    this.dashService.getNodeEntries(id).subscribe(
      res => {
        this.nodes = res;
      });
   }
  ngOnInit() {
  }
  checkParentNode(){
    if(this.parentId == '000'){
      return true;
    }
    return false;
  }
  updateNodes(node : any){
    this.isParentNode = false;
    this.parentId = node.parent;
    this.parentName = node.name;
    this.getNode(node.id);
  }
  goToBack(){
    this.getNode(this.parentId);
  }
  goBackToHome(value : any){
    this.parentId = '000';
    this.getNode(this.parentId);
  }
}

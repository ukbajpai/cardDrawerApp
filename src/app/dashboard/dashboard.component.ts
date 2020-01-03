import { Component, OnInit } from '@angular/core';
import { DashBoardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  parentId : string = '000';
  nodes : any;
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
  updateNodes(node : any){
    
    this.parentId = node.parent;
    this.getNode(node.id);
  }
  goToBack(){
    this.getNode(this.parentId);
  }
}

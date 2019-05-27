import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'app-popupbox',
  templateUrl: './popupbox.component.html',
  styleUrls: ['./popupbox.component.css']
})
export class PopupboxComponent implements OnInit {
  
private show: boolean = false;
public close(): void{
  this.show = false;
}
  constructor() { }
  selectedObject:string=null;
  displayModelList:any[]=[];

  display:any[]=[];

  displaydesc:any[]=[];

  descriptionList:any[]=[{
    ObjectType: 'Account',
    description: 'Account Object Description'
  },
  {
    ObjectType: 'Lead',
    description: 'Lead Object Description'
  },
  {
    ObjectType: 'Contact',
    description: 'Contact Object Description'
  },
  {
    ObjectType: 'Office',
    description: 'Office Object Description'
  }];

  modelList:any[]=[{
    ObjectType: 'Account',
    Salesforce:'Sales',
    Anaplan:'Anaplan'
  },
  {
    ObjectType: 'Account',
    Salesforce:'Opputunity',
    Anaplan:'Modules'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Headings',
    Anaplan:'List'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Tiltle',
    Anaplan:'Subsidery'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce2',
    Anaplan:'Anaplan2'
  },
  {
    ObjectType: 'Lead',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Lead',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Lead',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Lead',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Lead',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Contact',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Office',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Office',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },
  {
    ObjectType: 'Office',
    Salesforce:'Salesforce211',
    Anaplan:'Anaplan222'
  },

];
  ngOnInit() {
    this.onSelectChange();
  }
  onSelectChange(){
    if(this.selectedObject==null){
      this.display=this.modelList;
    }else{
      this.displayModelList=_.filter(this.modelList,{ObjectType:this.selectedObject});
  console.log(this.displayModelList);
    }
  
    this.displaydesc=_.filter(this.descriptionList,{ObjectType:this.selectedObject});
    console.log(this.displaydesc);
  }
}

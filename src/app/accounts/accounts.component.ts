import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Observable } from 'rxjs';
import {AccountsService} from '../services/accounts.service';
// import { Elements } from './accounts.model';
import {DataSource} from '@angular/cdk/collections';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AccountsComponent implements OnInit{

  
  dataSource = ELEMENT_DATA1;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;


  // dataSource1 = new UserDataSource(this.userService);
  // displayedColumns = ['name', 'email', 'phone', 'company'];
  // expandedElements:  Elements| null;
  // constructor(private userService: AccountsService) { }

  ngOnInit() {
  }


  datasources1 = ELEMENT_DATA;
  displayedColumns =['Account_Name', 'CR_Name', 'State', 'Country'];
  expandedElements:  Elements| null;


  datasources2 = ELEMENT_DATA2;
  displayed =['Account', 'CR', 'Sate', 'Coun'];
  expandedElementss:  Elements| null;
}

// export class UserDataSource extends DataSource<any> {
//   constructor(private userService: AccountsService) {
//     super();
//   }
//   connect(): Observable<Elements[]> {
//     return this.userService.getUser();
//   }
//   disconnect() {}
// }


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

export interface Elements{
  Account_Name:string;
  CR_Name:string;
  State:string;
  Country:string;
 
}

export interface Example{
  Account:string;
  CR:string;
  Sate:string;
  Coun:string;
 
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {
name:'Nivetha',
position: 123,
weight:45,
symbol:'hydrogen',
description:'Hydrpgen is a gas'
  },
  {
    name:'Deepika',
    position: 567,
    weight:34,
    symbol:'Nitrogen',
    description:'Nitrogen is a gas'
      },
        
];

const ELEMENT_DATA: Elements[] = [
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India'
  }, 
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
   
  },  
   {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    
  },  
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    
  }, 
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    
  }, 
];

const ELEMENT_DATA2: Example[] = [
  {
    Account: 'a',
    CR: 'Car',
    Sate: 'Tamil',
    Coun:'I',
    
  }, 
  {
    Account: 'b',
    CR: 'Carb',
    Sate: 'TNdu',
    Coun:'Ina',
    
  },  
   {
    Account: 'c',
    CR: 'Carbon',
    Sate: 'Tam',
    Coun:'Indi',
    
  }
];
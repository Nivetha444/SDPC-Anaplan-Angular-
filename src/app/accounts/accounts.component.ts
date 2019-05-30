import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


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

export class AccountsComponent {

  dataSource = ELEMENT_DATA1;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;

  datasources1 = ELEMENT_DATA;
  displayedColumns =['Account_Name', 'CR_Name', 'State', 'Country','Account_Record'];
  expandedElements:  Elements| null;
}


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
  Account_Record:string;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {
name:'Nivetha',
position: 123,
weight:345,
symbol:'hydrogen',
description:'Hydrpgen is a gas'
  },
  {
    name:'Nivetha',
    position: 123,
    weight:345,
    symbol:'hydrogen',
    description:'Hydrpgen is a gas'
      },
        {
name:'Nivetha',
position: 123,
weight:345,
symbol:'hydrogen',
description:'Hydrpgen is a gas'
  }
];

const ELEMENT_DATA: Elements[] = [
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  }, 
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
   {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  }, 
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  }, 
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
   {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  },  
  {
    Account_Name: 'abc',
    CR_Name: 'Carbon',
    State: 'TamilNdu',
    Country:'India',
    Account_Record: 'zs'
  }
];
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  Account_Name: string;
  Status:string;
  Type: string;
  Started:string;
  Duration:string;
  Actions:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:"Error"},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:"Warning!"},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:"Errors"},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:" "},
  {Account_Name:'Account', Status: 'Successful', Type: 'Data Sync', Started: 'Dec 11, 2013 at 6.01 PM', Duration:'00.04.45', Actions:"Warning!"}
];

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  [x: string]: any;
  displayedColumns: string[] = ['Account_Name', 'Status', 'Type', 'Started', 'Duration', 'Actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private location: Location){}

  goBack(){
    this.location.back();
  }

@ViewChild(MatSort) sort: MatSort;

ngOnInit() {
  this.dataSource.sort = this.sort;
}
}


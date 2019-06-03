import { Component, ViewChild, OnInit } from '@angular/core';
import { PopupAnaplanComponent } from '../popup-anaplan/popup-anaplan.component';
import { MatDialog } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccountPreviewService } from '../salesforce/service/AccountPreview';

export interface PeriodicElement {
  Label: string;
  API_Name: string;
  Description: string;
  sync: string;
  Deployed: string;
}

export interface Elements {
  Accounts_weekly__c: string;
  Parent_Account_ID_18_Digit__c: string;
  PARENT_ACCOUNT_NAME__c: string;
  type: string;
  Code__c: number;
  Account_Owner_18_Digit_Id__c: number;
  Name: string;
  City__c: string;
  DUNS_NUMBER__c: null;
  District__c: string;
  ACCOUNT_SEGMENTATION_TYPE__c: string;
  ORACLE_PERSON_ID__c: number;
  Geo__c: string;
  INDUSTRY1__c: string;
  Account_Owner_Name__c: string;
  State__c: null;
  Country__c: string;
  Sub_District__c: string;
  Name__c: string;
  ACCOUNT_STANDING__c: string;
  CMT_NAME__c: string;
  SIC_DESC__c: null;
  Sic: number;
  VALIDATIONS__c: null;
  AccountNumber: number;
  AM_ROLE_TYPE__c: null;
  SUB_DISTRICT_CODE__c: string;
  Account_Record_Type__c: string;
  Id: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Label: 'Account', API_Name: 'Account Name_c', Description: 'Brief Description of Accounts', sync: '10/12/13', Deployed: 'yes' },
  { Label: 'Revenue', API_Name: 'Contact_c', Description: 'Brief Description of Revenue', sync: '11/12/13', Deployed: 'No' }
];


@Component({
  selector: 'app-anaplan',
  templateUrl: './anaplan.component.html',
  styleUrls: ['./anaplan.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AnaplanComponent implements OnInit {

  constructor(public dialog: MatDialog, private readonly accountPreviewService: AccountPreviewService) { }
  collapsed: false;

  columnsToDisplay: string[] = ['select', 'Label', 'API_Name', 'Description', 'sync', 'Deployed'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement | null;
  datasources1 = [];
  displayedColumns: string[] = ['Accounts_weekly__c', 'Parent_Account_ID_18_Digit__c', 'PARENT_ACCOUNT_NAME__c', 'type', 'Code__c'];
  // datasources1 = Element_DATA1;
  // displayedColumns: string[] = ['Account_Name', 'CR_Name', 'State', 'Country', 'Account_Record'];
  // expandedElements: Elements | null;


  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupAnaplanComponent, {
      width: '700px',
      height: '530px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Label + 1}`;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.accountPreviewService.getAll({})
      .subscribe(response => {
          this.datasources1 = response;
          this.displayedColumns  = ['Accounts_weekly__c', 'Parent_Account_ID_18_Digit__c', 'PARENT_ACCOUNT_NAME__c', 'type', 'Code__c'];
      });
  }

}




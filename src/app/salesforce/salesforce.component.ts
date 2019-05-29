import { Component , ViewChild } from '@angular/core';
import { PopupboxComponent } from '../popupbox/popupbox.component';
import { MatDialog } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort} from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface PeriodicElement {
Label: string;
API_Name: string;
Description: string;
sync:string;
Deployed:string;
}

export interface Elements{
  Account_Name:string;
  CR_Name:string;
  State:string;
  Country:string;
  Account_Record:string;
 }

const ELEMENT_DATA: PeriodicElement[] = [
{Label:'Account', API_Name: 'Account Name_c', Description: '', sync: '10/12/13', Deployed:'yes'},
{Label:'Contact', API_Name: 'Contact_c', Description: '', sync: '11/12/13', Deployed:'No'},
{Label:'Industry Ranking', API_Name: 'Industry Ranking_c', Description: 'To track and maintain the Industry standards for prospects and customers', sync: '4/10/13', Deployed:'yes'},
{Label:'Lead', API_Name: 'Lead_c', Description: '', sync: '9/04/13', Deployed:'No'},
{Label:'Master Office', API_Name: 'Master Office_c', Description: 'Quate Integration list compromnise of CCW and EDW offers.', sync: '12/11/11', Deployed:'yes'},
{Label:'Account', API_Name: 'Account Name_c', Description: '', sync: '10/12/13', Deployed:'yes'},
{Label:'Contact', API_Name: 'Contact_c', Description: '', sync: '11/12/13', Deployed:'No'},
{Label:'Industry Ranking', API_Name: 'Industry Ranking_c', Description: 'To track and maintain the Industry standards for prospects and customers', sync: '4/10/13', Deployed:'yes'},
{Label:'Lead', API_Name: 'Lead_c', Description: '', sync: '9/04/13', Deployed:'No'},
{Label:'Master Office', API_Name: 'Master Office_c', Description: 'Quate Integration list compromnise of CCW and EDW offers.', sync: '12/11/11', Deployed:'yes'},
{Label:'Account', API_Name: 'Account Name_c', Description: '', sync: '10/12/13', Deployed:'yes'},
{Label:'Contact', API_Name: 'Contact_c', Description: '', sync: '11/12/13', Deployed:'No'},
{Label:'Industry Ranking', API_Name: 'Industry Ranking_c', Description: 'To track and maintain the Industry standards for prospects and customers', sync: '4/10/13', Deployed:'yes'},
{Label:'Lead', API_Name: 'Lead_c', Description: '', sync: '9/04/13', Deployed:'No'},
{Label:'Master Office', API_Name: 'Master Office_c', Description: 'Quate Integration list compromnise of CCW and EDW offers.', sync: '12/11/11', Deployed:'yes'},
{Label:'Account', API_Name: 'Account Name_c', Description: '', sync: '10/12/13', Deployed:'yes'},
{Label:'Contact', API_Name: 'Contact_c', Description: '', sync: '11/12/13', Deployed:'No'},
{Label:'Industry Ranking', API_Name: 'Industry Ranking_c', Description: 'To track and maintain the Industry standards for prospects and customers', sync: '4/10/13', Deployed:'yes'},
{Label:'Lead', API_Name: 'Lead_c', Description: '', sync: '9/04/13', Deployed:'No'},
{Label:'Master Office', API_Name: 'Master Office_c', Description: 'Quate Integration list compromnise of CCW and EDW offers.', sync: '12/11/11', Deployed:'yes'},
];

const Element_DATA1:Elements[] = [
  {Account_Name:'abc', CR_Name:'cds', State:'DFS', Country:'AD', Account_Record:'BRFBD'},
  {Account_Name:'abc', CR_Name:'cds', State:'DFS', Country:'AD', Account_Record:'BRFBD'},
  {Account_Name:'abc', CR_Name:'cds', State:'DFS', Country:'AD', Account_Record:'BRFBD'},
  {Account_Name:'abc', CR_Name:'cds', State:'DFS', Country:'AD', Account_Record:'BRFBD'},
  {Account_Name:'abc', CR_Name:'cds', State:'DFS', Country:'AD', Account_Record:'BRFBD'},
  ];


@Component({
  selector: 'app-salesforce',
  templateUrl: './salesforce.component.html',
  styleUrls: ['./salesforce.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SalesforceComponent {
  
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupboxComponent, {
      width:'700px',
      height:'530px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  displayedColumns: string[] = ['select','Label', 'API_Name', 'Description', 'sync', 'Deployed'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  dataSources = new MatTableDataSource<Elements>(Element_DATA1);
  expandedElement: PeriodicElement | null;

  selection = new SelectionModel<PeriodicElement>(true, []);
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

@ViewChild(MatSort) sort: MatSort;

ngOnInit() {
  this.dataSource.sort = this.sort;
}

}

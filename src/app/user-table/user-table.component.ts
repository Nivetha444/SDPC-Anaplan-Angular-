import { Component , OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort} from '@angular/material';

export interface PeriodicElement {
  // position: number;
  Label: string;
  API_Name: string;
  Description: string;
  sync:String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Label:'Account Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(1558355634570).toDateString()}
  /*{Label:'bccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'cccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'dccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'eccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'fccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'gccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'hccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'iccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)},
  {Label:'lccount Name', API_Name: 'Account Name_c', Description: 'It contain accounts name', sync: new Date(11/12/13)}*/
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})


export class UserTableComponent {
  // elements: any = [];
  // headElements = ['id', 'first', 'last', 'handle'];

  // ngOnInit() {
  //   for (let i = 1; i <= 15; i++) {
  //     this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
  //   }
  // }
  displayedColumns: string[] = ['select','Label', 'API_Name', 'Description', 'sync'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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

// @ViewChild(MatSort) sort: MatSort;

// ngOnInit() {
//   this.dataSource.sort = this.sort;
// }
}

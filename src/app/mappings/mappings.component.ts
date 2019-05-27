import { Component, OnInit } from '@angular/core';
import { PopupboxComponent } from '../popupbox/popupbox.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-mappings',
  templateUrl: './mappings.component.html',
  styleUrls: ['./mappings.component.css']
})
export class MappingsComponent {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupboxComponent, {
      width:'700px',
      height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

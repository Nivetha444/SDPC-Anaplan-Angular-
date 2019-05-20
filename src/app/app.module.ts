import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserTableComponent } from './user-table/user-table.component';

import { MatTableModule, MatCheckboxModule, MatSort } from '@angular/material';
import {MatDialogModule} from "@angular/material";
import { MappingsComponent } from './mappings/mappings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserTableComponent,
    MatSort,
    MappingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

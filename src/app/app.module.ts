import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './shared/services/ajaxService.service';
import { HttpInterceptorProviders } from './shared/interceptor.provider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserTableComponent } from './user-table/user-table.component';
import {MatRippleModule} from '@angular/material/core';

import { MatTableModule, MatCheckboxModule,  MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { PopupboxComponent } from './popupbox/popupbox.component';
import { MappingsComponent } from './mappings/mappings.component';
import { SyncComponent } from './sync/sync.component';
import { HomeComponent } from './home/home.component';
import { SalesforceComponent } from './salesforce/salesforce.component';
import { JobsComponent } from './jobs/jobs.component';
import { AccountsComponent } from './accounts/accounts.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AccountsService } from '../app/services/accounts.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserTableComponent,
    PopupboxComponent,
    MappingsComponent,
    SyncComponent,
    HomeComponent,
    SalesforceComponent,
    JobsComponent,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonToggleModule,
    HttpClientModule, HttpModule
  ],
  providers: [AjaxService, HttpInterceptorProviders, AccountsService],
  bootstrap: [AppComponent],
  entryComponents: [PopupboxComponent]
})
export class AppModule { }

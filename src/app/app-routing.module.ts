import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesforceComponent } from './salesforce/salesforce.component';
import { JobsComponent } from './jobs/jobs.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AnaplanComponent } from './anaplan/anaplan.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
  path:'Salesforce',
  component: SalesforceComponent
  },
  {
    path:'Anaplan',
    component: AnaplanComponent
    },
  {
    path:'Salesforce/Jobs Monitor',
    component: JobsComponent
  },
  {
    path:'Salesforce/Account Review',
    component:AccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

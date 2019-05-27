import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesforceComponent } from './salesforce/salesforce.component';
import { JobsComponent } from './jobs/jobs.component';

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
    path:'Salesforce/Jobs Monitor',
    component: JobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: 'app-popup-anaplan',
  templateUrl: './popup-anaplan.component.html',
  styleUrls: ['./popup-anaplan.component.css']
})
export class PopupAnaplanComponent implements OnInit {
  private show: boolean = false;
  public close(): void {
    this.show = false;
  }
  constructor() {}
  selectedObject: string = null;
  displayModelList: any[] = [];

  display: any[] = [];

  displaydesc: any[] = [];

  descriptionList: any[] = [
    {
      ObjectType:"Select",
      description:"Brief Description of Accounts and Revenue"
    },
    {
      ObjectType: "Account",
      description: "The Brief of Accounts in Sales Object and Anaplan Model Fileds"
    },
    {
      ObjectType: "Revenue",
      description: "The Brief of Revenue in Sales Object and Anaplan Model Fileds"
    }
  ];

  modelList: any[] = [
    {
      ObjectType: "Account",
      Salesforce: "Accounts_weekly",
      Anaplan: "Accounts_weekly"
    },
    {
      ObjectType: "Account",
      Salesforce: "Parent_Account_ID",
      Anaplan: "Parent_Account_ID"
    },
    {
      ObjectType: "Account",
      Salesforce: "Parent_Account_Name",
      Anaplan: "Parent_Account_Name"
    },
    {
      ObjectType: "Account",
      Salesforce: "Type",
      Anaplan: "Type"
    },
    {
      ObjectType: "Account",
      Salesforce: "Code",
      Anaplan: "Code"
    },
    {
      ObjectType: "Account",
      Salesforce: "Account_Owner",
      Anaplan: "Account_Owner"
    },
    {
      ObjectType: "Account",
      Salesforce: "Name",
      Anaplan: "Name"
    },
    {
      ObjectType: "Account",
      Salesforce: "City",
      Anaplan: "City"
    },
    {
      ObjectType: "Account",
      Salesforce: "Duns_Number",
      Anaplan: "Duns_Number"
    },
    {
      ObjectType: "Account",
      Salesforce: "Segmentation_Type",
      Anaplan: "Segmentation_Type"
    },
    {
      ObjectType: "Account",
      Salesforce: "Oracle_Person_Id",
      Anaplan: "Oracle_Person_Id"
    },
    {
      ObjectType: "Account",
      Salesforce: "Geo",
      Anaplan: "Geo"
    },
    {
      ObjectType: "Account",
      Salesforce: "Account_Owner_Name",
      Anaplan: "Account_Owner_Name"
    },
    {
      ObjectType: "Account",
      Salesforce: "State",
      Anaplan: "State"
    },
    {
      ObjectType: "Account",
      Salesforce: "Country",
      Anaplan: "Country"
    },
    {
      ObjectType: "Account",
      Salesforce: "Sub_District",
      Anaplan: "Sub_District_"
    },
    {
      ObjectType: "Account",
      Salesforce: "Name",
      Anaplan: "Name"
    },
    {
      ObjectType: "Account",
      Salesforce: "Account_Standing",
      Anaplan: "Account_Standing"
    },
    {
      ObjectType: "Account",
      Salesforce: "CMT_Name",
      Anaplan: "CMT_Name"
    },
    {
      ObjectType: "Account",
      Salesforce: "SIC_Desc",
      Anaplan: "SIC_Desc"
    },
    {
      ObjectType: "Account",
      Salesforce: "SIC",
      Anaplan: "SIC"
    },
    {
      ObjectType: "Account",
      Salesforce: "Validations",
      Anaplan: "Validations"
    },
    {
      ObjectType: "Account",
      Salesforce: "Account_Number",
      Anaplan: "Account_Number"
    },
    {
      ObjectType: "Account",
      Salesforce: "Role_Type",
      Anaplan: "Role_Type"
    },
    {
      ObjectType: "Account",
      Salesforce: "Sub_District_Code",
      Anaplan: "Sub_District_Code"
    },
    {
      ObjectType: "Account",
      Salesforce: "Account_Record_Type",
      Anaplan: "Account_Record_Type"
    },
    {
      ObjectType: "Account",
      Salesforce: "ID",
      Anaplan: "ID"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "SFDC_Accounts__c",
      Anaplan: "SFDC_Accounts__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "FY15__c",
      Anaplan: "FY15__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "FY16__c",
      Anaplan: "FY16__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "FY18__c",
      Anaplan: "FY18__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "FY17__c",
      Anaplan: "FY17__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "FY19__c",
      Anaplan: "FY19__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "Revenue_Category_Code__c",
      Anaplan: "Revenue_Category_Code__c"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "Id",
      Anaplan: "Id"
    },
    {
      ObjectType: "Revenue",
      Salesforce: "type",
      Anaplan: "type"
    },

  ];
  ngOnInit() {
    this.onSelectChange();
  }
  onSelectChange() {
    if (this.selectedObject == null) {
      this.displayModelList = this.modelList;
    } else {
      this.displayModelList = _.filter(this.modelList, {
        ObjectType: this.selectedObject
      });
      console.log(this.displayModelList);
    }

    if(this.selectedObject== null){
      this.displaydesc = this.descriptionList
    }else{
    this.displaydesc = _.filter(this.descriptionList, {
      ObjectType: this.selectedObject
    });
    console.log(this.displaydesc);
  }
}
}

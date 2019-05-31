import { Injectable } from '@angular/core';
import { AjaxService } from './../../shared/services/ajaxService.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountPreviewService {
  constructor(private readonly _ajaxService: AjaxService) { }

  getAll(params: object): any {
    //return this._ajaxService.getWithParam(params, 'dashboard/sdfc-service.php');
    return this._ajaxService.getWithParam(params, 'api/AccountPreview');
  }
}

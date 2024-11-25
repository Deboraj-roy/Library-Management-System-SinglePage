import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LedgerRequestViewModel } from '../../models/Entry/LedgerRequestViewModel';


@Injectable({
  providedIn: 'root'
})

export class EntryService {
  baseApiUrl : string = environment.baseApiUrl
  
  constructor(private http : HttpClient,private approuter: Router) {
  }

  getAllCategoryMajorCategoryId(majorCategoryId: number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllCategoryMajorCategoryId/${majorCategoryId}`)
  }

  getCashAndCashequvilent() {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetCashAndCashequvilent`)
  }
  
  getAllCategoryMajorCategory() {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllCategoryMajorCategory`)
  }
  
  getOpeningBalance() {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetOpeningBalance`)
  }

  saveOpeningBalance(userObj:any){

    return this.http.post<any>(this.baseApiUrl+'/api/Entry/SaveOpeningBalance',userObj);
   }
   
   
   getAllLedgerReqs():Observable<LedgerRequestViewModel[]>{
    return this.http.get<LedgerRequestViewModel[]>(this.baseApiUrl+'/api/Entry/GetAllLedgerRequests');
   }

   
  //  getAllLedgerRequestsDetails(voucherNumber: string): Observable<LedgerRequestViewModel[]> {
  //   const url = `${this.baseApiUrl}/api/Entry/GetLedgerRequestsDetails?VoucherNumber=${voucherNumber}`;
  //   return this.http.get<LedgerRequestViewModel[]>(url, { headers: { 'Content-Type': 'application/json' } });
  // }

  
  getAllLedgerRequestsDetails(voucherNumber: string) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetLedgerRequestsDetails/${voucherNumber}`)
  }

  ApproveLedgerReq(voucherNumber: string) {
    return this.http.get(this.baseApiUrl + `/api/Entry/ApproveLedgerReq/${voucherNumber}`)
  }

   saveOpeningBalanceLedger(userObj:any){

    return this.http.post<any>(this.baseApiUrl+'/api/Entry/SaveOpeningBalanceLedger',userObj);
   }

   getLedgerByVoucher(type:string,startDate:string,endDate:string) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetLedgerByVoucher/${type}/${startDate}/${endDate}`)
   }
  //  getVoucherByVoucherType
  getVoucherByVoucherType(type:string) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetVoucherByVoucherType/${type}`)
   }

  // getVoucherByType
  getVoucherByType(type:string) {
    return this.http.get(this.baseApiUrl + `/api/Entry/getVoucherByType/${type}`)
  }
  // getAllLedgerByNoteId
  getAllLedgerByNoteId(startDate:string,endDate:string,noteId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllLedgerByNoteId/${startDate}/${endDate}/${noteId}`)
  }
  // SaveFiscalYear
  saveFiscalYear(userObj:any){

    return this.http.post<any>(this.baseApiUrl+'/api/Entry/SaveFiscalYear',userObj);
   }
   
   //GetFiscalYear
   getFiscalYear() {
    return this.http.get(this.baseApiUrl + '/api/Entry/GetFiscalYear')
  }
  // deleteVoucher
  deleteVoucher(voucher:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/DeleteVoucher/${voucher}`)
  }
  //DeleteFiscalYear
  deleteFiscalYear(id:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/DeleteFiscalYear/${id}`)
  }

  // GetMinorCategoryByMajorCategory
  getMinorCategoryByMajorCategory(id:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetMinorCategoryByMajorCategory/${id}`)
  }

  // GetAccLedgerByCode
  getAccLedgerByCode(code:any,startDate:any,endDate:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAccLedgerByCode/${code}/${startDate}/${endDate}`)
  }

  // GetAllSubLedgerByMinorCategory
  getAllSubLedgerByMinorCategory(id:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllSubLedgerByMinorCategory/${id}`)
  }
  // GetVandorOrCustomerByMinorCategory
  getVandorOrCustomerByMinorCategory(id:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetVandorOrCustomerByMinorCategory/${id}`)
  }
  // GetAllAccountByMajorCategoryId
  getAllAccountByMajorCategoryId(id:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllAccountByMajorCategoryId/${id}`)
  }

  getAllDealer(id:any,toDate:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllDealer/${id}/${toDate}`)
  }

  getVoucherDetails(type:string,startDate:string,endDate:string,ledgerId:any) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetVoucherDetails/${type}/${startDate}/${endDate}/${ledgerId}`)
   }
   getVoucherItemsDetails(voucher:string) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetVoucherItemsDetails/${voucher}`)
   }

   
}

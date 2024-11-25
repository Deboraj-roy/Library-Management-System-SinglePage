import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NoteEntry } from '../../models/Note/NoteEntry';
import { Observable } from 'rxjs';
import { NoteDetailEntry } from '../../models/Note/NoteDetailEntry';
import { NoteViewModel } from '../../models/Note/NoteViewModel';
import { DashboardViewModel } from '../../models/Note/DashboardViewModel';
import { Models } from '../../models/PurchaseOrder/Models';
import { LedgerRequestViewModel } from '../../models/Entry/LedgerRequestViewModel';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseApiUrl : string = environment.baseApiUrl
  
  constructor(private http : HttpClient,private approuter: Router) {
  }

  // SaveNote
  saveNote(model:NoteEntry){
    return this.http.post<any>(this.baseApiUrl+'/api/Note/SaveNote',model);
   }
   //SaveNoteDetails
   saveNoteDetails(model:NoteDetailEntry){
    return this.http.post<any>(this.baseApiUrl+'/api/Note/SaveNoteDetails',model);
   }
   //GetAllNote
   getAllNote():Observable<NoteViewModel[]>{
    return this.http.get<NoteViewModel[]>(this.baseApiUrl+'/api/Note/GetAllNote/');
   }
  //  GetAllNoteDetails
  getAllNoteDetails(){
    return this.http.get(this.baseApiUrl+'/api/Note/GetAllNoteDetails');
   }

   getBalanceSheet(id:any,date:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBalanceSheet/${id}/${date}`);
   }
   //GetBalanceSheetForEquity
   getBalanceSheetForEquity(id:any,date:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBalanceSheetForEquity/${id}/${date}`); 
   }
   
   //GetTrialBalanceSheet
   getTrialBalanceSheet(start:any,end:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetTrialBalanceSheet/${start}/${end}`);
   }

   //GetProfitLossStatement
   getProfitLossStatement(startDate:string,endDate:string,NotId:number){
    return this.http.get(this.baseApiUrl + `/api/Note/GetProfitLossStatement/${startDate}/${endDate}/${NotId}`);
   }
   //GetProfitLossByLedger
   getProfitLossByLedger(startdate:any,endDate:any,code:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetProfitLossByLedger/${startdate}/${endDate}/${code}`);
   }
  //  getAllNoteDetail
  getAllNoteDetail(id:any,date:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetAllNoteDetail/${id}/${date}`);
   }

  //  getAllLedgerByLedgerCode
  getAllLedgerByLedgerCode(startdate:any,endDate:any,code:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetAllLedgerByLedgerCode/${startdate}/${endDate}/${code}`);
   }
   //  getAllLedgerByLedgerCode
   getCostOfSales(startdate:any,endDate:any,noteId:number){
    return this.http.get(this.baseApiUrl + `/api/Note/GetCostOfSales/${startdate}/${endDate}/${noteId}`);
   }

  //  GetAllNoteLedger
  getAllNoteLedger(startdate:any,endDate:any,noteId:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetAllNoteLedger/${startdate}/${endDate}/${noteId}`);
   }

   getBankPaymentStatement(startdate:any,endDate:any,secondStartDate:any,secondEndDate:any,type:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBankPaymentStatement/${startdate}/${endDate}/${secondStartDate}/${secondEndDate}/${type}`);
  }

  // GetReceiptList
  getReceiptList(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetReceiptList/${startdate}/${endDate}`);
  }

  getAllddlBanks():Observable<Models[]>{
    return this.http.get<Models[]>(this.baseApiUrl+'/api/Note/getAllddlBanks');
   }
  
  getBankAndCashBookList(startdate:any,endDate:any,type:any,selectedBankId:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBankAndCashBookList/${startdate}/${endDate}/${type}/${selectedBankId}`);
  }
  
  getBankAndCashBookListDatewise(startdate:any,endDate:any,type:any,selectedBankId:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBankAndCashBookListDatewise/${startdate}/${endDate}/${type}/${selectedBankId}`);
  }
  
  getAllTransactions(startdate:any,endDate:any,type:any,selectedBankId:any,ledgerId: number, subLedgerId: number){
    return this.http.get(this.baseApiUrl + `/api/Note/GetAllLedgerTransactions/${startdate}/${endDate}/${type}/${selectedBankId}/${ledgerId}/${subLedgerId}`);
  }
  
  getProfitOrLoss(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetProfitOrLoss/${startdate}/${endDate}`);
  }
  getProfitOrLossMonthly(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetProfitOrLossMonthly/${startdate}/${endDate}`);
  }

  get_AR_AP_Balance(endDate:any):Observable<DashboardViewModel[]>{
    return this.http.get<DashboardViewModel[]>(this.baseApiUrl + `/api/Note/getARAPBalance/${endDate}`);
   }

   get_LedgersWaitingForApproval():Observable<LedgerRequestViewModel>{
    return this.http.get<LedgerRequestViewModel>(this.baseApiUrl + `/api/Note/GetLedgersWaitingForApproval`);
   }
  // getHeadBalanceByAccHeadId

  getHeadBalanceByAccHeadId(accHeadId:any,startDate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetHeadBalanceByAccHeadId/${accHeadId}/${startDate}/${endDate}`);
  }
  // GetFiscalYearStartDate
  getFiscalYearStartDate(){
    return this.http.get(this.baseApiUrl + `/api/Note/GetFiscalYearStartDate`);
  }

  // getReceiptOpening
  getReceiptOpening(startdate:any,endDate:any,secondStartDate:any,secondEndDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetReceiptOpening/${startdate}/${endDate}/${secondStartDate}/${secondEndDate}`);
  }

  // GetOperatincCashFromCashFlow
  getOperatincCashFromCashFlow(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetOperatincCashFromCashFlow/${startdate}/${endDate}`);
  }

  //GetInvestingCashFlow
  getInvestingCashFlow(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetInvestingCashFlow/${startdate}/${endDate}`);
  }

  // GetFinantialCashFromCashFlow
  getFinantialCashFromCashFlow(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetFinantialCashFromCashFlow/${startdate}/${endDate}`);
  }
  // GetOpeningBalanceForCashFromCashFlow
  getOpeningBalanceForCashFromCashFlow(startdate:any,endDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetOpeningBalanceForCashFromCashFlow/${startdate}/${endDate}`);
  }
  //report
   getReport(start:string,end:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetReport/${start}/${end}`,{observe:'response',responseType:'blob'});
  }

  getReportforAll(start:string,end:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetReportForAll/${start}/${end}`,{observe:'response',responseType:'blob'});
  }

  receiptPaymentReport(type:string,start:string,end:string){
    return this.http.get(this.baseApiUrl + `/api/Note/ReceiptPaymentReport/${type}/${start}/${end}`,{observe:'response',responseType:'blob'});
  }

  getBankAndCashBookReport(type:string,start:string,end:string,bookType:string,selectedBankId:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBankAndCashBookReport/${type}/${start}/${end}/${bookType}/${selectedBankId}`,{observe:'response',responseType:'blob'});
  }

  getBankAndCashBookReportDatewise(type:string,start:string,end:string,bookType:string,selectedBankId:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetBankAndCashBookReportDatewise/${type}/${start}/${end}/${bookType}/${selectedBankId}`,{observe:'response',responseType:'blob'});
  }

  // GetVoucherListReport 
  getVoucherListReport(type:string,ledgerId:any,subledgerId:any,start:string,end:string){
    return this.http.get(this.baseApiUrl + `/api/Note/GetVoucherListReport/${type}/${ledgerId}/${subledgerId}/${start}/${end}`,{observe:'response',responseType:'blob'});
  }
  
  getDealerListReport(type:string,balanceType:any,toDate:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetDealerListReport/${type}/${balanceType}/${toDate}`,{observe:'response',responseType:'blob'});
  }
  
  getSalesInvoiceReport(voucher:any,type:any){
    return this.http.get(this.baseApiUrl + `/api/Note/GetSalesInvoiceReport/${voucher}/${type}`,{observe:'response',responseType:'blob'});
  }
  
   
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  baseApiUrl : string = environment.baseApiUrl
  
  constructor(private http : HttpClient,private approuter: Router) {
  }

  saveParty(userObj:any){
    return this.http.post<any>(this.baseApiUrl+'/api/Party/SaveParty',userObj);
   }

  getAllParty() {
    return this.http.get(this.baseApiUrl + `/api/Party/GetAllParty`);
  }

  getAllPartyList() {
    return this.http.get(this.baseApiUrl + `/api/Party/GetAllPartyList`);
  }

  getAllPartyTransaction(ledgerName:string,startDate:string,endDate:string,partyId:number) {

    let param={ledgerName:ledgerName,startDate:startDate,endDate:endDate,partyId:partyId};
    

    return this.http.post<any>(this.baseApiUrl + `/api/Party/GetAllPartyTransaction`,param);
  }

  getCashBankBalance(startDate:string) {
     return this.http.get(this.baseApiUrl + `/api/Party/GetCashBankBalance/${startDate}`);
  }

  getAllPartyDetailsReport(type:any,ledgerName:any,startDate:any,endDate:any,partyId:any) {

    
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("type",type);
    // queryParams = queryParams.append("ledgerName",ledgerName);
    // queryParams = queryParams.append("startDate",startDate);
    // queryParams = queryParams.append("endDate",endDate);
    // queryParams = queryParams.append("partyId",partyId);

    let param={type:type,ledgerName:ledgerName,startDate:startDate,endDate:endDate,partyId:partyId};
    //let a=this.baseApiUrl+`/api/Note/GetPartyDetailsReport/${type}/${ledgerName}/${startDate}/${endDate}/${partyId}`;

    // return this.http.get(a,{observe:'response',responseType:'blob'});
    //return this.http.get(this.baseApiUrl+'/api/Note/GetPartyDetailsReport/type/'+type+'/ledgerName/'+ledgerName+'/startDate/'+startDate+'/endDate/'+endDate+'/partyId/'+partyId,{observe:'response',responseType:'blob'});
    return this.http.post(this.baseApiUrl + '/api/Note/GetPartyDetailsReport',param,{observe:'response',responseType:'blob'});
  }

  

  getBalanceSheetReport(obj:any) {
    return this.http.post(this.baseApiUrl + `/api/Note/GetBalanceSheetReport`,obj,{observe:'response',responseType:'blob'});
  }

  getProfitOrLossReport(obj:any) {
    return this.http.post(this.baseApiUrl + `/api/Note/GetProfitOrLossReport`,obj,{observe:'response',responseType:'blob'});
  }
  
  getDailyBankAndCashReport(type:any,date:any) {
    return this.http.get(this.baseApiUrl + `/api/Note/GetDailyBankAndCashReport/${type}/${date}`,{observe:'response',responseType:'blob'});
  }

  getAllItemSummary(name:any,ledgerId:any) {
    return this.http.get(this.baseApiUrl + `/api/Party/GetAllItemSummary/${name}/${ledgerId}`);
  }

  getItemSummary(name:any) {
    return this.http.get(this.baseApiUrl + `/api/Party/GetItemSummary/${name}`);
  }

  getInventoryDetails(fromDate:any,toDate:any,ledgerId:any,subLedgerId:any) {
    return this.http.get(this.baseApiUrl + `/api/Party/GetInventoryDetails/${fromDate}/${toDate}/${ledgerId}/${subLedgerId}`);
  }
  getInventoryLists(fromDate:any,toDate:any,ledgerId:any,subLedgerId:any) {
    return this.http.get(this.baseApiUrl + `/api/Party/GetInventoryItems/${fromDate}/${toDate}/${ledgerId}/${subLedgerId}`);
  }
  getInventoryListsForProfit(fromDate:any,toDate:any,ledgerId:any,subLedgerId:any) {
    return this.http.get(this.baseApiUrl + `/api/Party/GetInventoryItemsForProfit/${fromDate}/${toDate}/${ledgerId}/${subLedgerId}`);
  }
  getInventoryDetailsReport(fromDate:any,toDate:any,ledgerId:any,subLedgerId:any,type:any) {
    return this.http.get(this.baseApiUrl + `/api/Note/GetInventoryDetailsReport/${fromDate}/${toDate}/${ledgerId}/${subLedgerId}/${type}`,{observe:'response',responseType:'blob'});
  }
  getInventoryProfitReport(fromDate:any,toDate:any,ledgerId:any,subLedgerId:any,type:any) {
    return this.http.get(this.baseApiUrl + `/api/Note/GetInventoryProfitReport/${fromDate}/${toDate}/${ledgerId}/${subLedgerId}/${type}`,{observe:'response',responseType:'blob'});
  }
  getInventoryReport(ledgerId:any,type:any) {
    return this.http.get(this.baseApiUrl + `/api/Note/GetInventoryReport/${ledgerId}/${type}`,{observe:'response',responseType:'blob'});
  }
  getItemPriceForPurchaseReturn(suppLedgerId:any,ItemLedger:any) {
    return this.http.get(this.baseApiUrl + `/api/Party/GetItemPriceForPurchaseReturn/${suppLedgerId}/${ItemLedger}`);
  }
  
}

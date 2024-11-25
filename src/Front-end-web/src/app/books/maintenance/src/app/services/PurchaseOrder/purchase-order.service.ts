import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Models } from '../../models/PurchaseOrder/Models';
import { PurchaseOrderVM } from '../../models/PurchaseOrder/PurchaseOrderVM';
import { SavePurchaseOrder } from '../../models/PurchaseOrder/SavePurchaseOrder';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  baseApiUrl : string = environment.baseApiUrl
  constructor(private http : HttpClient,private approuter: Router) { }
  
  // savePurchaseOrder
  savePurchaseOrder(model:SavePurchaseOrder){
    return this.http.post<any>(this.baseApiUrl+'/api/PurchaseOrder/SavePurchaseOrder',model);
   }
   
   getAllddlModels():Observable<Models[]>{
  return this.http.get<Models[]>(this.baseApiUrl+'/api/PurchaseOrder/getAllddlModels');
 }

 getAllddlOrders():Observable<PurchaseOrderVM[]>{
  return this.http.get<PurchaseOrderVM[]>(this.baseApiUrl+'/api/PurchaseOrder/getAllddlOrders');
 }

   //getAllPurchaseOrder
   getAllPurchaseOrder():Observable<PurchaseOrderVM[]>{
    return this.http.get<PurchaseOrderVM[]>(this.baseApiUrl+'/api/PurchaseOrder/getAllPurchaseOrder');
   }

   getAllPurchaseOrderTransactions(PurchaseOrderId: number): Observable<PurchaseOrderVM[]> {
    const url = `${this.baseApiUrl}/api/PurchaseOrder/getAllPurchaseOrderTransactions?PurchaseOrderId=${PurchaseOrderId}`;
    return this.http.get<PurchaseOrderVM[]>(url, { headers: { 'Content-Type': 'application/json' } });
  }
  
  getCostingSheetReport(PurchaseOrderId: number){
    const url = `${this.baseApiUrl}/api/PurchaseOrder/getCostingSheetReport/${PurchaseOrderId}`;
    return this.http.get(url,{observe:'response',responseType:'blob'});
  }

  
  getAllSupplierCostingHeads(subLedgerId: any) {
    return this.http.get(this.baseApiUrl + `/api/PurchaseOrder/getAllSupplierCostingHeads/${subLedgerId}`)
  }

}

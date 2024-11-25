import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AccHead } from '../../models/acc-heads/AccHead';
import { AccSubHead } from '../../models/acc-heads/AccSubHead';
import { AccSubHeadCategory } from '../../models/acc-heads/AccSubHeadCategory';
import { MajorCategory } from '../../models/acc-heads/MajorCategory';
import { MinorCategory } from '../../models/acc-heads/MinorCategory';
import { MinorSubCategory } from '../../models/acc-heads/MinorSubCategory';
import { AccLedgerImage } from '../../../app/models/Entry/VoucherImage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccHeadService {

  private refreshSubject = new BehaviorSubject<boolean>(false);
  refresh$ = this.refreshSubject.asObservable();

  baseApiUrl : string = environment.baseApiUrl
  
  constructor(private http : HttpClient,private approuter: Router) {

  }
// // gets all Account Head

triggerRefresh() {
  this.refreshSubject.next(true);
}

// Gets all account sub head categories by a  specific subhead id
   getAccSubHeadById(accHeadId:number):Observable<AccSubHead[]>{

    return this.http.get<AccSubHead[]>(this.baseApiUrl+'/api/AccHeads/getAllAccSubHeadById/'+accHeadId);
   }

   getAllAccSubHeadCategoriesBySubHeadId(accSubHeadId:number):Observable<AccSubHeadCategory[]>{

    return this.http.get<AccSubHeadCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllAccSubHeadCategoriesBySubHeadId/'+accSubHeadId);
   }


   getAllMajorCategoriesByAccSubHeadCategoryId(Id:number):Observable<MajorCategory[]>{

    return this.http.get<MajorCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllMajorCategoriesByAccSubHeadCategoryId/'+Id);
   }

   getAllMinorCategoriesByMajorCategoryId(Id:number):Observable<MinorCategory[]>{

    return this.http.get<MinorCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllMinorCategoriesByMajorCategoryId/'+Id);
   }

   getAllMinorSubCategoriesByMinorCategoryId(Id:number):Observable<MinorSubCategory[]>{

    return this.http.get<MinorSubCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllMinorSubCategoriesByMinorCategoryId/'+Id);
   }

//get all

 getCa():Observable<any[]>{

  return this.http.get<any>(this.baseApiUrl+'/api/AccHeads/getCa');
 }

 getCaByConditions(myobj:any):Observable<any[]>{

  return this.http.post<any>(this.baseApiUrl+'/api/AccHeads/getCaByConditions',myobj);
 }


getAllAccHeads():Observable<AccHead[]>{

  return this.http.get<AccHead[]>(this.baseApiUrl+'/api/AccHeads/getAllAccHeads');
 }

 getAllAccSubHeads():Observable<AccSubHead[]>{

  return this.http.get<AccSubHead[]>(this.baseApiUrl+'/api/AccHeads/getAllAccSubHeads');
 }
//  getAccSubHeadByAccHeadId

getAccSubHeadByAccHeadId(id:any):Observable<AccSubHead[]>{

  return this.http.get<AccSubHead[]>(this.baseApiUrl+'/api/AccHeads/GetAccSubHeadByAccHeadId/'+id);
 }

   getAllMajorCategories():Observable<MajorCategory[]>{

    return this.http.get<MajorCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllMajorCategories');

   }
  //  getMajorCategoriesByCategoryId
  getMajorCategoriesByCategoryId(id:any):Observable<MajorCategory[]>{

    return this.http.get<MajorCategory[]>(this.baseApiUrl+'/api/AccHeads/GetMajorCategoriesByCategoryId/'+id);

   }

   getAllCategoryAccHeadCategoryId(accHeadCategoryId:number):Observable<any[]>{

    return this.http.get<any[]>(this.baseApiUrl+'/api/AccHeads/GetAllCategoryAccHeadCategoryId/'+accHeadCategoryId);
   }


   getAllAccSubHeadCategories():Observable<AccSubHeadCategory[]>{

    return this.http.get<AccSubHeadCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllAccSubHeadCategories');
   }
  //  getAccSubHeadCategoriesByAccSubId
  getAccSubHeadCategoriesByAccSubId(id:any):Observable<AccSubHeadCategory[]>{

    return this.http.get<AccSubHeadCategory[]>(this.baseApiUrl+'/api/AccHeads/GetAccSubHeadCategoriesByAccSubId/'+id);
   }


   getAllMinorCategories():Observable<MinorCategory[]>{

    return this.http.get<MinorCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllMinorCategories');
   }
  //  getMinorCategoriesByMajorCategoryId
  getMinorCategoriesByMajorCategoryId(id:any):Observable<MinorCategory[]>{

    return this.http.get<MinorCategory[]>(this.baseApiUrl+'/api/AccHeads/GetMinorCategoriesByMajorCategoryId/'+id);
   }

   getAllMinorSubCategories():Observable<MinorSubCategory[]>{

    return this.http.get<MinorSubCategory[]>(this.baseApiUrl+'/api/AccHeads/getAllMinorSubCategories');
   }
  //  getMinorSubByMinorCategoryId
  getMinorSubByMinorCategoryId(id:any):Observable<MinorSubCategory[]>{

    return this.http.get<MinorSubCategory[]>(this.baseApiUrl+'/api/AccHeads/GetMinorSubByMinorCategoryId/'+id);
   }

  //  getAllLedger(startdate:string,enddate:string):Observable<any[]>{
  //   console.log("hi rakib");
    // let params = new HttpParams();
    // params = params.append('startDate', startdate);
    // params = params.append('endDate', enddate);  

    // console.log("params",params);
    // return this.http.get<any[]>(this.baseApiUrl+'/api/Entry/GetAllLedgerByName/${startdate}/${enddate}');
    // GetSubModuleWithPage/${userId}/${companyId}/${logedUserId}/${moduleId}`
  //  }

   getAllLedger(startdate: string, enddate: string, ledgerId:number,subLedgerId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllLedgerByName/${startdate}/${enddate}/${ledgerId}/${subLedgerId}`)
  }
  getAllLedger2(startdate: string, enddate: string, ledgerId:number,subLedgerId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllLedgerByName2/${startdate}/${enddate}/${ledgerId}/${subLedgerId}`)
  }
  // GetAllLedgerByLedgerId
  getAllLedgerByLedgerId(startdate: string, enddate: string, ledgerId:number,subLedgerId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllLedgerByLedgerId/${startdate}/${enddate}/${ledgerId}/${subLedgerId}`)
  }
  
  getLedgerOpeningBalance(startdate: string, ledgerId:number,subLedgerId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetLedgerOpeningBalance/${startdate}/${ledgerId}/${subLedgerId}`)
  }

  getAllLedgerByAccLedgerName(ledgerId: number,subLedgerId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetAllLedgerByAccLedgerName/${ledgerId}/${subLedgerId}`)
  }

  getLedgerLastBalance(ledgerId: number,subLedgerId:number) {
    return this.http.get(this.baseApiUrl + `/api/Entry/GetLedgerLastBalance/${ledgerId}/${subLedgerId}`)
  }

   getVoucherNumber(voucherType:string):Observable<any>{
    return this.http.get<any>(this.baseApiUrl+'/api/Entry/GetVoucherNumber/'+voucherType);
   }
   
   getAllLedgerName():Observable<any[]>{
    return this.http.get<any[]>(this.baseApiUrl+'/api/Entry/GetAllLedgerName');
   }


//Save ReceiptEntry
saveAccHeadSubCategory(userObj:any){

  return this.http.post<any>(this.baseApiUrl+'/api/AccHeads/saveAccSubHeadCategory',userObj);
 }

 saveMajorCategory(userObj:any){

  return this.http.post<any>(this.baseApiUrl+'/api/AccHeads/saveMajorCategory',userObj);
 }

 saveMinorCategory(userObj:any){

  return this.http.post<any>(this.baseApiUrl+'/api/AccHeads/saveMinorCategory',userObj);
 }

 saveMinorSubCategory(userObj:any){

  return this.http.post<any>(this.baseApiUrl+'/api/AccHeads/saveMinorSubCategory',userObj);
 }

 saveReceiptEntry(userObj:any){

  return this.http.post<any>(this.baseApiUrl+'/api/Entry/ReceiptEntry',userObj);
 }

 saveJournal(userObj:any){
  
  return this.http.post<any>(this.baseApiUrl+'/api/Entry/SaveJournal',userObj);
 }

 saveJournalTemp(userObj:any){
  
  return this.http.post<any>(this.baseApiUrl+'/api/Entry/SaveJournalTemp',userObj);
 }

 
 getVoucherReport(voucher:any){
  return this.http.get(this.baseApiUrl + `/api/Entry/GetVoucherReport/${voucher}`,{observe:'response',responseType:'blob'});
}

 deleteLedger(ledgerId:any){
  return this.http.get(this.baseApiUrl + `/api/AccHeads/DeleteLedgerByLedgerId/${ledgerId}`)
 }

 deleteSubLedger(subLedgerId:any){
  return this.http.get(this.baseApiUrl + `/api/AccHeads/DeleteSubLedgerById/${subLedgerId}`)
 }


 getAllddlVouchers(searchVoucher:string):Observable<AccLedgerImage[]>{
  return this.http.get<AccLedgerImage[]>(this.baseApiUrl+'/api/AccHeads/getAllddlVouchers/'+searchVoucher);
 }

 saleItemWithDiscount(userObj:any){
  
  return this.http.post<any>(this.baseApiUrl+'/api/Request/SaleItemWithDiscount',userObj);
 }


}

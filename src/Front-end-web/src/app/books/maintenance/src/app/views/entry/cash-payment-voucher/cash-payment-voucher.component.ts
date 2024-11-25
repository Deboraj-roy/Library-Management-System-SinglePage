import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MinorCategory } from 'src/app/models/acc-heads/MinorCategory';
import { MinorSubCategory } from 'src/app/models/acc-heads/MinorSubCategory';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { PartyViewModel } from 'src/app/models/Party/PartyViewModel';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';
import { PurchaseOrderVM } from 'src/app/models/PurchaseOrder/PurchaseOrderVM';
import { PurchaseOrderService } from 'src/app/services/PurchaseOrder/purchase-order.service';
import { UserService } from 'src/app/services/users/user.service';
import { UsersVM } from 'src/app/models/users/UsersVM';
import { NumberFormatPipe } from 'src/app/number-format.pipe';

@Component({
  selector: 'app-cash-payment-voucher',
  templateUrl: './cash-payment-voucher.component.html',
  styleUrls: ['./cash-payment-voucher.component.scss']
})
export class CashPaymentVoucherComponent {

  public cashPaymentForm:FormGroup;
  public datePipeString:any;
  public ddlOrders:PurchaseOrderVM[] = [];
  public ledgerList:any[]=[];
  public advanceLedgerList:any[]=[];
  public ledgerSubLedger:any[]=[];
  public voucher:any;
  public receiptModel: Receipt=new Receipt();
  public fromNameAmount:any;
   public fromName:any;
   public fromamount:any;
   public toNameAmount:any;
   public toamount:string;
   public toName:string;
  public debitAmounttotal:number=0;
  public creditAmounttotal:number=0;
  public creaditAmount:any[]=[];
  public purchaseOrderId:any;
  public ddlUsers:UsersVM[] = [];
  public userId:any = 1;
  public isButtonClicked: boolean = false;

   public listOfMinorCategory:MinorCategory[]=[];
   public minorId:any;
   public minorSubCategory:MinorSubCategory;
   public partyList:PartyViewModel[];
   public partyId:any;
   public showFields: boolean = false; 

 constructor(
   private _toastr: ToastrService,
   private _fb: FormBuilder,
   private _accHeadService: AccHeadService,
   private _entryService: EntryService,
   private _partyService: PartyService,
   private _datePipe: DatePipe,
   private _PurchaseOrderService: PurchaseOrderService,
   private _UserService: UserService,
   private _NumberFormatPipe: NumberFormatPipe,
   
 ) {
   this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
   }
 ngOnInit(): void {
   
   this.getAllCategoryMajorCategoryId();
   this.getMinorCategoryByMajorCategoryId();
   this.loadCategoriesForDebit();
   this.getVoucherNumber();
   this.getAllParty();
   this.loadddlOrders();
   this.loadddlUsers();
   this.createForm();
   this.showFields = false; 
 }

 numberFormat(number: number): string {
  return this._NumberFormatPipe.transform(number);
}

 loadddlOrders() {
  this._PurchaseOrderService.getAllddlOrders().subscribe({
    next: (result) => {
      this.ddlOrders = result as PurchaseOrderVM[];
     console.log(this.ddlOrders);
    },
    error: (response) => {
      console.log(response);
    },
  });
}

loadddlUsers() {
  debugger;
  this._UserService.getAllddlUsers().subscribe({
    next: (result) => {
      this.ddlUsers = result as UsersVM[];
    },
    error: (response) => {
      console.log(response);
    },
  });
}

 getAllParty(){
  this._partyService.getAllParty().subscribe((res:any)=>{
    this.partyList=res as PartyViewModel[];
    console.log(this.partyList,"this.partyList,");
  })
}
 getMinorCategoryByMajorCategoryId(){
  let id=65;
  this._entryService.getMinorCategoryByMajorCategory(id).subscribe((res:any)=>{
    this.listOfMinorCategory=res as MinorCategory[];
  })
}

 getAllCategoryMajorCategoryId(){
   let id=57;
   this._entryService.getAllCategoryMajorCategoryId(id).subscribe((res:any)=>{
     this.ledgerList=res as any[];
     console.log(this.ledgerList,"this.ledgerList");
   })
 }
 getAllSupplierCostingHeads(subLedgerId: any){
   this._PurchaseOrderService.getAllSupplierCostingHeads(subLedgerId).subscribe((res:any)=>{
     this.advanceLedgerList=res as any[];
     console.log(this.advanceLedgerList,"this.advanceLedgerList");
   })
 }
 getVoucherNumber(){
   let type='CashPayment';
   this._accHeadService.getVoucherNumber(type).subscribe({
     next: (result) => {
       this.voucher=result.data;
       console.log(this.voucher,"this.voucher");
     },
     error: (response) => {
       console.log(response);
     },
   });
 }
 loadCategoriesForDebit() {
   let id=0;
   this._accHeadService.getAllCategoryAccHeadCategoryId(id).subscribe({
     next: (result) => {
       console.log(result,"get all category");
       this.ledgerSubLedger = result;
     },
     error: (response) => {
       console.log(response);
     },
   });
 }
 
 getDebitAmount(amount:any){
   var i=0;
   this.debitAmounttotal=0;
   for(i=0;i<(<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).length;i++){
     this.debitAmounttotal += (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('amount').value;
   }
 }
 getCreaditAmount(amount:any){
   var i=0;
   this.creditAmounttotal=0;
   for(i=0;i<(<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).length;i++){
     this.creditAmounttotal+=(<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('amount').value;
   }
 }

 saveReceipt(){ 
  this.isButtonClicked = true;
  debugger;
  if(this.fromval.narration==null){
    this.fromval.invalid=true;
  }
  
  if(this.fromval.userId==null){
    this.fromval.userId=undefined;
  }
  for (let i = 0; i < this.fromval.multipleDebitEntry.length; i++){
    if(this.fromval.multipleDebitEntry[i].debitLedgerId==0 || (this.fromval.multipleDebitEntry[i].debitSubLedgerCode === "12001" && this.fromval.multipleDebitEntry[i].supplierCostingHeadId == undefined) || (this.fromval.multipleDebitEntry[i].debitSubLedgerCode === "12002" && this.fromval.multipleDebitEntry[i].supplierCostingHeadId == undefined)){
      this.fromval.invalid=true;
    }
  }
  for (let i = 0; i < this.fromval.multipleCreaditEntry.length; i++){
    if(this.fromval.multipleCreaditEntry[i].creaditLedgerId==0){
      this.fromval.invalid=true;
    }
  }
  if(this.fromval.purchaseOrderId==null){
    this.fromval.purchaseOrderId=undefined;
  }
  if(this.fromval.partyId==null){
    this.fromval.partyId=undefined;
  }
   if(this.fromval.invalid){
     this._toastr.info("Please provied valid information");
     this.isButtonClicked = false;
   }
  else
  {
    if(this.creditAmounttotal==this.debitAmounttotal){
      if(this.fromval.userId == 1){
        this._accHeadService.saveJournal(this.fromval).subscribe((res:any)=>{
        this.showToast(res);
        if(res.status!=200){
         this.fromamount=null;
         this.isButtonClicked = false;
           }
           else{
             this.loadddlOrders();
             this.loadddlUsers();
             this.getVoucherNumber();
             this.createForm();
             this.fromamount=null;
             this.creditAmounttotal=0;
             this.debitAmounttotal=0;
             this.isButtonClicked = false;
           }
        })
      }else{
        
        this._accHeadService.saveJournalTemp(this.fromval).subscribe((res:any)=>{
          this.showToast(res);
          if(res.status!=200){
           this.fromamount=null;
           this.isButtonClicked = false;
             }
             else{
               this.loadddlOrders();
               this.loadddlUsers();
               this.getVoucherNumber();
               this.createForm();
               this.fromamount=null;
               this.creditAmounttotal=0;
               this.debitAmounttotal=0;
               this.isButtonClicked = false;
             }
          })
      }
    }
   else{
     this._toastr.info("Amount not match, Please try again");
     this.fromamount=null;
     this.isButtonClicked = false;
   }
  }
}

showaAvanceLedgerNgSelect(i: number): boolean {
  const val = (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('debitSubLedgerCode').value;
  if(val === "12001" || val === "12002"){
    return true;
  }else{
    return false;
  }
  // const bool =(<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('debitSubLedgerCode').value==="12001";
  // return bool;
}



 getledgerTo(uniqid:any,i:any){
  if(uniqid!=null){
   this.receiptModel= this.ledgerSubLedger.find(p => p.uniqId==uniqid);
   if(this.receiptModel.subLedgerCode === "12001" || this.receiptModel.subLedgerCode === "12002"){
    (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').setValue(this.getAllSupplierCostingHeads(this.receiptModel.subLedgerId));
    (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').enable();
  }else{
     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').disable();
 (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').patchValue(null);
   }
    this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
      this.fromNameAmount=res as any;
      this.fromamount=this.fromNameAmount.balance;
      this.fromName=this.fromNameAmount.headName;
      (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(this.fromamount);
      (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('fromName').patchValue(this.fromName);
   });
   (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).patchValue({
     debitUniqId: this.receiptModel.uniqId,
     supplierCostingHeadId: this.receiptModel.supplierCostingHeadId,
     debitLedgerId: this.receiptModel.ledgerId,                                                                       
     debitLedgerCode :this.receiptModel.ledgerCode,
     debitAccLedgerName:this.receiptModel.subLedgerName,     
     debitSubLedgerId:this.receiptModel.subLedgerId,
     debitSubLedgerCode: this.receiptModel.subLedgerCode,
     debitbalance:this.receiptModel.balance,
     });
  }
  else{
   (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(null);
   (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('fromName').patchValue(null);
     this.fromval.debitUniqId=null;
     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').disable();
     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').patchValue(null);
    }
 }
 getledgerFrom(uniqIdCredit:any,i:any){
     if(uniqIdCredit!=null){
       this.receiptModel= this.ledgerList.find(p => p.uniqId==uniqIdCredit);
       this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
        this.toNameAmount=res as any;
        this.toamount=this.toNameAmount.balance;
        this.toName=this.toNameAmount.headName;
        (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(this.toamount);
        (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('toName').patchValue(this.toName);
      });
     (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).patchValue({
       creaditUniqId: this.receiptModel.uniqId,
       creaditLedgerId: this.receiptModel.ledgerId,                                                                       
       creaditLedgerCode :this.receiptModel.ledgerCode,
       creaditAccLedgerName:this.receiptModel.subLedgerName,     
       creaditSubLedgerId:this.receiptModel.subLedgerId,
       creaditSubLedgerCode: this.receiptModel.subLedgerCode,
       creaditbalance:this.toamount,
     });
     }
     else{
       (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(null);
       (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('toName').patchValue(null);
     }
 }

 addDebit(){
   (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).push(this.addCashPaymentCredit());
 }
 removeDebit(i:any){
   (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).removeAt(i);
 }

 removeCreadit(i:any){
   (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).removeAt(i);
 }
 addCreadit(){
   (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).push(this.addCashPaymentDebit());
 }

 saveParty(name:any){

  let partyViewModel = new PartyViewModel();
  partyViewModel.partyName=name;

  this._partyService.saveParty(partyViewModel).subscribe((res:any)=>{
    this.showToast(res);
    this.getAllParty();
  })
};

 createForm(){
   this.cashPaymentForm=this._fb.group({
    narration:[,[Validators.required]],
       voucherNumber:[''],
       voucherType:['CashPayment'], 
       purchaseOrderId: undefined,
       userId: 1,
      // partyId:[,[]],
       createdDate:[this.datePipeString], 
       multipleDebitEntry:this._fb.array([
        this.addCashPaymentDebit()
       ]),
       multipleCreaditEntry:this._fb.array([
         this.addCashPaymentCredit()
        ]),
   })
 }

 addCashPaymentCredit():FormGroup{
   return this._fb.group({
     creaditAccLedgerName:[''],
     creaditLedgerId:[0],
     creaditSubLedgerId:[0],
     creaditLedgerCode:[''],
     creaditSubLedgerCode:[''],
     creaditUniqId:[,[Validators.required]],
     amount:[0,[Validators.required]],
     creaditbalance:[null],
     toName:[null]
   })
 }

 addCashPaymentDebit():FormGroup{
   return this._fb.group({
       debitAccLedgerName:[''],
       debitLedgerId:[0],
       debitSubLedgerId:[0],
       debitLedgerCode:[''],
       debitSubLedgerCode:[''],
       debitUniqId:[,[Validators.required]], 
       supplierCostingHeadId: undefined, 
       amount:[0,[Validators.required]],
       debitbalance:[null],
       fromName:[null]
   })
 }

 showToast(toastmsg:any){
   if (toastmsg.status == 200) {
     this._toastr.success(toastmsg.message);
   } else if (toastmsg.status == 201) {
     this._toastr.warning(toastmsg.message);
   } else if (toastmsg.status == 202) {
     this._toastr.info(toastmsg.message);
   } else {
     this._toastr.error(toastmsg.message);
   }

 }

 get fromval(){
   return this.cashPaymentForm.value;
 }
 get g() {
   return this.cashPaymentForm.controls;
 }


//   public cashPaymentForm:FormGroup;
//    public datePipeString:any;
//    public ledgerList:any[]=[];
//    public ledgerSubLedger:any[]=[];
//    public voucher:any;
//    public receiptModel: Receipt=new Receipt();
//    public fromamount:any;
//    public toamount:string;
//    public debitAmounttotal:number=0;
//    public creditAmounttotal:number=0;
//    public creaditAmount:any[]=[];

//   constructor(
//     private _toastr: ToastrService,
//     private _fb: FormBuilder,
//     private _accHeadService: AccHeadService,
//     private _entryService: EntryService,
//     private _datePipe: DatePipe,
    
//   ) {
//     this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
//     }
//   ngOnInit(): void {
//     this.createForm();
//     this.getAllCategoryMajorCategoryId();
//     this.loadCategoriesForDebit();
//     this.getVoucherNumber();
//   }

//   getAllCategoryMajorCategoryId(){
//     let id=57;
//     this._entryService.getAllCategoryMajorCategoryId(id).subscribe((res:any)=>{
//       this.ledgerList=res as any[];
//       console.log(this.ledgerList,"this.ledgerList");
//     })
//   }
//   getVoucherNumber(){
//     let type='CashPayment';
//     this._accHeadService.getVoucherNumber(type).subscribe({
//       next: (result) => {
//         this.voucher=result.data;
//         console.log(this.voucher,"this.voucher");
//       },
//       error: (response) => {
//         console.log(response);
//       },
//     });
//   }
//   loadCategoriesForDebit() {
//     let id=0;
//     this._accHeadService.getAllCategoryAccHeadCategoryId(id).subscribe({
//       next: (result) => {
//         console.log(result,"get all category");
//         this.ledgerSubLedger = result;
//       },
//       error: (response) => {
//         console.log(response);
//       },
//     });
//   }
  
//   getDebitAmount(amount:any){
//     var i=0;
//     this.debitAmounttotal=0;
//     for(i=0;i<(<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).length;i++){
//       this.debitAmounttotal += (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('amount').value;
//     }
//   }
//   getCreaditAmount(amount:any){
//     var i=0;
//     this.creditAmounttotal=0;
//     for(i=0;i<(<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).length;i++){
//       this.creditAmounttotal+=(<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('amount').value;
//     }
//   }

//   saveReceipt(){ 
    
//     if(this.fromval.invalid){
//       this._toastr.info("Please provied valid information");
//     }
//      if(this.creditAmounttotal==this.debitAmounttotal)
//       this._accHeadService.saveJournal(this.fromval).subscribe((res:any)=>{
//       this.showToast(res);
//       this.createForm();
//       this.getVoucherNumber();
//       this.fromamount=null;
//       this.debitAmounttotal=0;
//       })
//     else{
//       this._toastr.info("Amount not match, Please try again");
//       this.fromamount=null;
//     }
//  }

//   getledgerTo(uniqid:any,i:any){
//     debugger;
//    if(uniqid!=null){
//     this.receiptModel= this.ledgerSubLedger.find(p => p.uniqId==uniqid);
//      this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
//      this.fromamount=res.data as any;
//      console.log("this.fromamount",this.fromamount);
//      (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(this.fromamount);
//     });
//     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).patchValue({
//       debitUniqId: this.receiptModel.uniqId,
//       debitLedgerId: this.receiptModel.ledgerId,                                                                       
//       debitLedgerCode :this.receiptModel.ledgerCode,
//       debitAccLedgerName:this.receiptModel.subLedgerName,     
//       debitSubLedgerId:this.receiptModel.subLedgerId,
//       debitSubLedgerCode: this.receiptModel.subLedgerCode,
//       debitbalance:this.receiptModel.balance,
//       });
//    }
//    else{
//     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(null);
//       this.fromval.debitUniqId=null;
//      }
//   }
//   getledgerFrom(uniqIdCredit:any,i:any){
//       if(uniqIdCredit!=null){
//         this.receiptModel= this.ledgerList.find(p => p.uniqId==uniqIdCredit);
//         this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
//         this.toamount=res.data as any;
//         (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(this.toamount);
//        });
//       (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).patchValue({
//         creaditUniqId: this.receiptModel.uniqId,
//         creaditLedgerId: this.receiptModel.ledgerId,                                                                       
//         creaditLedgerCode :this.receiptModel.ledgerCode,
//         creaditAccLedgerName:this.receiptModel.subLedgerName,     
//         creaditSubLedgerId:this.receiptModel.subLedgerId,
//         creaditSubLedgerCode: this.receiptModel.subLedgerCode,
//         creaditbalance:this.toamount,
//       });
//       }
//       else{
//         (<FormArray>this.cashPaymentForm.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(null);
//       }
//   }

//   removeCreadit(i:any){
//     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).removeAt(i);
//   }
//   addCreadit(){
//     (<FormArray>this.cashPaymentForm.get('multipleDebitEntry')).push(this.addCashPaymentDebit());
//   }

//   createForm(){
//     this.cashPaymentForm=this._fb.group({
//         narration:[''],
//         voucherNumber:[''],
//         voucherType:['CashPayment'], 
//         createdDate:[this.datePipeString], 
//         multipleDebitEntry:this._fb.array([
//          this.addCashPaymentDebit()
//         ]),
//         multipleCreaditEntry:this._fb.array([
//           this.addCashPaymentCredit()
//          ]),
//     })
//   }

//   addCashPaymentCredit():FormGroup{
//     return this._fb.group({
//       creaditAccLedgerName:[''],
//       creaditLedgerId:[0],
//       creaditSubLedgerId:[0],
//       creaditLedgerCode:[''],
//       creaditSubLedgerCode:[''],
//       creaditUniqId:[,[Validators.required]],
//       amount:[0,[Validators.required]],
//       creaditbalance:[null],
//     })
//   }

//   addCashPaymentDebit():FormGroup{
//     return this._fb.group({
//         debitAccLedgerName:[''],
//         debitLedgerId:[0],
//         debitSubLedgerId:[0],
//         debitLedgerCode:[''],
//         debitSubLedgerCode:[''],
//         debitUniqId:[,[Validators.required]], 
//         amount:[0,[Validators.required]],
//         debitbalance:[null]
//     })
//   }

//   showToast(toastmsg:any){
//     if (toastmsg.status == 200) {
//       this._toastr.success(toastmsg.message);
//     } else if (toastmsg.status == 201) {
//       this._toastr.warning(toastmsg.message);
//     } else if (toastmsg.status == 202) {
//       this._toastr.info(toastmsg.message);
//     } else {
//       this._toastr.error(toastmsg.message);
//     }

//   }

//   get fromval(){
//     return this.cashPaymentForm.value;
//   }
//   get g() {
//     return this.cashPaymentForm.controls;
//   }
}

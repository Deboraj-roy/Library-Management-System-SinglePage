import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { ReceiptEntry } from 'src/app/models/Entry/ReceiptEntry';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { UserService } from 'src/app/services/users/user.service';
import { UsersVM } from 'src/app/models/users/UsersVM';
import { NumberFormatPipe } from 'src/app/number-format.pipe';

@Component({
  selector: 'app-contra-voucher',
  templateUrl: './contra-voucher.component.html',
  styleUrls: ['./contra-voucher.component.scss']
})
export class ContraVoucherComponent {
   
  public contraFrom:FormGroup;
  public datePipeString:any;
  public ledgerList:any[]=[];
  public ledgerSubLedger:any[]=[];
  public voucher:any;
  public receiptModel: Receipt=new Receipt();
  public fromamount:any;
  public NameBalance:any;
  public toNameBalance:any;
  public fromHeadName:string;
  public toamount:string;
  public toHeadName:string;
  public debitAmounttotal:number=0;
  public creditAmounttotal:number=0;
  public creaditAmount:any[]=[];
  public ddlUsers:UsersVM[] = [];
  public userId:any = 1;
  public isButtonClicked: boolean = false;

 constructor(
   private _toastr: ToastrService,
   private _fb: FormBuilder,
   private _accHeadService: AccHeadService,
   private _entryService: EntryService,
   private _datePipe: DatePipe,
   private _UserService: UserService,
   private _NumberFormatPipe: NumberFormatPipe,
   
 ) {
   this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
   }
 ngOnInit(): void {
   this.createForm();
   this.getAllCategoryMajorCategoryId();
   this.loadCategoriesForDebit();
   this.getVoucherNumber();
   this.loadddlUsers();
 }

 numberFormat(number: number): string {
  return this._NumberFormatPipe.transform(number);
}

 getAllCategoryMajorCategoryId(){
   this._entryService.getAllCategoryMajorCategory().subscribe((res:any)=>{
     this.ledgerList=res as any[];
   })
 }
 getVoucherNumber(){
   let type='Contra';
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
   this._entryService.getAllCategoryMajorCategory().subscribe({
     next: (result) => {
       this.ledgerSubLedger = result as any[];
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

 getDebitAmount(amount:any){
   var i=0;
   this.debitAmounttotal=0;
   for(i=0;i<(<FormArray>this.contraFrom.get('multipleDebitEntry')).length;i++){
     this.debitAmounttotal += (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(i).get('amount').value;
   }
 }
 getCreaditAmount(amount:any){
   var i=0;
   this.creditAmounttotal=0;
   for(i=0;i<(<FormArray>this.contraFrom.get('multipleCreaditEntry')).length;i++){
     this.creditAmounttotal+=(<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(i).get('amount').value;
   }
 }

 saveReceipt(){ 
  this.isButtonClicked = true;

  if(this.fromval.narration==null){
    this.fromval.invalid=true;
  }
  if(this.fromval.userId==null){
    this.fromval.userId=undefined;
  }
  for (let i = 0; i < this.fromval.multipleDebitEntry.length; i++){
    if(this.fromval.multipleDebitEntry[i].debitLedgerId==0){
      this.fromval.invalid=true;
    }
  }
  for (let i = 0; i < this.fromval.multipleCreaditEntry.length; i++){
    if(this.fromval.multipleCreaditEntry[i].creaditLedgerId==0){
      this.fromval.invalid=true;
    }
  }
   
   if(this.fromval.invalid){
     this._toastr.info("Please provied valid information");
     this.isButtonClicked = false;
   }
    else{
          if(this.creditAmounttotal==this.debitAmounttotal){
            if(this.fromval.userId == 1){
              
        this._accHeadService.saveJournal(this.fromval).subscribe((res:any)=>{
          this.showToast(res);
          if(res.status!=200){
            this.fromamount=null;
            this.isButtonClicked = false;
          }
          else{
            this.getVoucherNumber();
            this.loadddlUsers();
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
            this.getVoucherNumber();
            this.loadddlUsers();
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

 getledgerTo(uniqid:any,i:any){
  if(uniqid!=null){
   this.receiptModel= this.ledgerList.find(p => p.uniqId==uniqid);

   console.log(uniqid,"uniqid er value",i,"i er value");
     
    this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
    this.NameBalance=res as any;
    this.fromHeadName=this.NameBalance.headName;
    this.fromamount=this.NameBalance.balance;
    (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(this.fromamount);
    (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(i).get('fromHeadName').patchValue(this.fromHeadName);
   });
   (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(i).patchValue({
     debitUniqId: this.receiptModel.uniqId,
     debitLedgerId: this.receiptModel.ledgerId,                                                                       
     debitLedgerCode :this.receiptModel.ledgerCode,
     debitAccLedgerName:this.receiptModel.subLedgerName,     
     debitSubLedgerId:this.receiptModel.subLedgerId,
     debitSubLedgerCode: this.receiptModel.subLedgerCode,
     debitbalance:this.receiptModel.balance,
   });
  }
  else{
   (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(null);
   (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(i).get('fromHeadName').patchValue(null);
    }
 }
 getledgerFrom(uniqIdCredit:any,i:any){
     if(uniqIdCredit!=null){
       this.receiptModel= this.ledgerSubLedger.find(p => p.uniqId==uniqIdCredit);
       this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
       this.toNameBalance=res as any;
       this.toamount=this.toNameBalance.balance;
       this.toHeadName=this.toNameBalance.headName;
       (<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(this.toamount);
       (<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(i).get('toHeadName').patchValue(this.toHeadName);
      });
     (<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(i).patchValue({
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
       (<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(null);
       (<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(i).get('toHeadName').patchValue(null);
     }
 }
 removeDebit(i:any){
   (<FormArray>this.contraFrom.get('multipleDebitEntry')).removeAt(i);
   var n=0;
   this.debitAmounttotal=0;
   for(n=0;n<(<FormArray>this.contraFrom.get('multipleDebitEntry')).length;n++){
     this.debitAmounttotal += (<FormArray>this.contraFrom.get('multipleDebitEntry')).at(n).get('amount').value;
   }
 }
 addDebit(){
   (<FormArray>this.contraFrom.get('multipleDebitEntry')).push(this.addContraDebit());
 }
 removeCreadit(i:any){
   (<FormArray>this.contraFrom.get('multipleCreaditEntry')).removeAt(i);
   var n=0;
   this.creditAmounttotal=0;
   for(n=0;n<(<FormArray>this.contraFrom.get('multipleCreaditEntry')).length;n++){
     this.creditAmounttotal+=(<FormArray>this.contraFrom.get('multipleCreaditEntry')).at(n).get('amount').value;
   }
 }
 addCreadit(){
   (<FormArray>this.contraFrom.get('multipleCreaditEntry')).push(this.addContraCredit());
 }

 createForm(){
   this.contraFrom=this._fb.group({
    narration:[,[Validators.required]],
       voucherNumber:[''],
       userId: 1,
       voucherType:['Contra'], 
       createdDate:[this.datePipeString], 
       multipleDebitEntry:this._fb.array([
        this.addContraDebit()
       ]),
       multipleCreaditEntry:this._fb.array([
         this.addContraCredit()
        ]),
   })
 }

 addContraCredit():FormGroup{
   return this._fb.group({
     creaditAccLedgerName:[''],
     creaditLedgerId:[0],
     creaditSubLedgerId:[0],
     creaditLedgerCode:[''],
     creaditSubLedgerCode:[''],
     creaditUniqId:[,[Validators.required]],
     amount:[0,[Validators.required]],
     creaditbalance:[null],
     toHeadName:[null]
   })
 }

 addContraDebit():FormGroup{
   return this._fb.group({
       debitAccLedgerName:[''],
       debitLedgerId:[0],
       debitSubLedgerId:[0],
       debitLedgerCode:[''],
       debitSubLedgerCode:[''],
       debitUniqId:[,[Validators.required]], 
       amount:[0,[Validators.required]],
       debitbalance:[null],
       fromHeadName:[null]
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
   return this.contraFrom.value;
 }
 get g() {
   return this.contraFrom.controls;
 }
  // getAllCategoryMajorCategory(){
  //     this._entryService.getAllCategoryMajorCategory().subscribe((res:any)=>{
  //       this.listOfContravoucher=res as any [];
  //       console.log(this.listOfContravoucher,"this is contra voucher");
  //     })
  // }
  
 

}

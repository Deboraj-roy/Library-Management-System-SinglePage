import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { ReceiptEntry } from 'src/app/models/Entry/ReceiptEntry';
import { PurchaseOrderVM } from 'src/app/models/PurchaseOrder/PurchaseOrderVM';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PurchaseOrderService } from 'src/app/services/PurchaseOrder/purchase-order.service';
import { UserService } from 'src/app/services/users/user.service';
import { UsersVM } from 'src/app/models/users/UsersVM';
import { NumberFormatPipe } from 'src/app/number-format.pipe';

@Component({
  selector: 'app-journal-voucher',
  templateUrl: './journal-voucher.component.html',
  styleUrls: ['./journal-voucher.component.scss']
})

export class JournalVoucherComponent {

   public journalFrom:FormGroup;
   public datePipeString:any;
   public ddlOrders:PurchaseOrderVM[] = [];
   public ddlUsers:UsersVM[] = [];
   public userId:any = 1;
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
   public isButtonClicked: boolean = false;

  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _accHeadService: AccHeadService,
    private _entryService: EntryService,
    private _datePipe: DatePipe,
    private _PurchaseOrderService: PurchaseOrderService,
    private _UserService: UserService,
    private _NumberFormatPipe: NumberFormatPipe,
    
  ) {
    this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    }
  ngOnInit(): void {
    this.getAllCategoryMajorCategoryId();
    this.loadCategoriesForDebit();
    this.getVoucherNumber();
    this.loadddlOrders();
    this.loadddlUsers();
    this.createForm();
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

  getAllCategoryMajorCategoryId(){
    let id=0;
    // this._entryService.getAllCategoryMajorCategoryId(id).subscribe((res:any)=>{
    //   this.ledgerList=res as any[];
    //   console.log(this.ledgerList,"this.ledgerList");
    // })

    this._accHeadService.getAllCategoryAccHeadCategoryId(id).subscribe((res:any)=>{
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
    let type='Journal';
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
    for(i=0;i<(<FormArray>this.journalFrom.get('multipleDebitEntry')).length;i++){
      this.debitAmounttotal += (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('amount').value;
    }
  }
  getCreaditAmount(amount:any){
    var i=0;
    this.creditAmounttotal=0;
    for(i=0;i<(<FormArray>this.journalFrom.get('multipleCreaditEntry')).length;i++){
      this.creditAmounttotal+=(<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(i).get('amount').value;
    }
  }

  
  getVoucherReport(voucher: any){
    this._accHeadService.getVoucherReport(voucher).subscribe((res:any)=>{
      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
    })
  }

  saveReceipt(){ 
    this.isButtonClicked = true;
    debugger;
    if(this.fromval.narration==null){
      this.fromval.invalid=true;
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
    if(this.fromval.userId==null){
      this.fromval.userId=undefined;
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
            if(res.voucher != null && res.voucher != ""){
              this.getVoucherReport(res.voucher);
            }
            this.fromamount=null;
            this.getVoucherNumber();
            this.loadddlOrders();
            this.loadddlUsers();
            this.creditAmounttotal=0;
            this.debitAmounttotal=0;
            this.createForm();
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
            if(res.voucher != null && res.voucher != ""){
              this.getVoucherReport(res.voucher);
            }
            this.fromamount=null;
            this.getVoucherNumber();
            this.loadddlOrders();
            this.loadddlUsers();
            this.creditAmounttotal=0;
            this.debitAmounttotal=0;
            this.createForm();
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
  const val = (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('debitSubLedgerCode').value;
  if(val === "12001" || val === "12002"){
    return true;
  }else{
    return false;
  }
  // const bool =(<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('debitSubLedgerCode').value==="12001";
  // return bool;
}


  getledgerTo(uniqid:any,i:any){
    debugger;
   if(uniqid!=null){
    this.receiptModel= this.ledgerList.find(p => p.uniqId==uniqid);
      if(this.receiptModel.subLedgerCode === "12001" || this.receiptModel.subLedgerCode === "12002"){
        (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').setValue(this.getAllSupplierCostingHeads(this.receiptModel.subLedgerId));
        (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').enable();
      }else{
        (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').disable();
    (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').patchValue(null);
      }
     this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
      this.fromNameAmount=res as any;
      this.fromamount=this.fromNameAmount.balance;
      this.fromName=this.fromNameAmount.headName;
      (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(this.fromamount);
      (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('fromName').patchValue(this.fromName);
    });
    (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).patchValue({
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
    (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(null);
    (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('fromName').patchValue(null);
        (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').disable();
        (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(i).get('supplierCostingHeadId').patchValue(null);
     }
  }
  getledgerFrom(uniqIdCredit:any,i:any){
      if(uniqIdCredit!=null){
        this.receiptModel= this.ledgerSubLedger.find(p => p.uniqId==uniqIdCredit);
        this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
          this.toNameAmount=res as any;
          this.toamount=this.toNameAmount.balance;
          this.toName=this.toNameAmount.headName;
          (<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(this.toamount);
          (<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(i).get('toName').patchValue(this.toName);
        });
      (<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(i).patchValue({
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
        (<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(null);
        (<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(i).get('toName').patchValue(null);
      }
  }
  removeDebit(i:any){
    (<FormArray>this.journalFrom.get('multipleDebitEntry')).removeAt(i);
    var n=0;
    this.debitAmounttotal=0;
    for(n=0;n<(<FormArray>this.journalFrom.get('multipleDebitEntry')).length;n++){
      this.debitAmounttotal += (<FormArray>this.journalFrom.get('multipleDebitEntry')).at(n).get('amount').value;
    }
  }
  addDebit(){
    (<FormArray>this.journalFrom.get('multipleDebitEntry')).push(this.addCashReceiptDebit());
  }
  removeCreadit(i:any){
    (<FormArray>this.journalFrom.get('multipleCreaditEntry')).removeAt(i);
    var n=0;
    this.creditAmounttotal=0;
    for(n=0;n<(<FormArray>this.journalFrom.get('multipleCreaditEntry')).length;n++){
      this.creditAmounttotal+=(<FormArray>this.journalFrom.get('multipleCreaditEntry')).at(n).get('amount').value;
    }
  }
  addCreadit(){
    (<FormArray>this.journalFrom.get('multipleCreaditEntry')).push(this.addCashReceiptCredit());
  }

  createForm(){
    this.journalFrom=this._fb.group({
      narration:[,[Validators.required]],
        voucherNumber:[''],
        voucherType:['Journal'], 
        createdDate:[this.datePipeString], 
        purchaseOrderId: undefined,
        userId: 1,
        multipleDebitEntry:this._fb.array([
         this.addCashReceiptDebit()
        ]),
        multipleCreaditEntry:this._fb.array([
          this.addCashReceiptCredit()
         ]),
    })
  }

  addCashReceiptCredit():FormGroup{
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

  addCashReceiptDebit():FormGroup{
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
        fromName:[null],
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
    return this.journalFrom.value;
  }
  get g() {
    return this.journalFrom.controls;
  }

}

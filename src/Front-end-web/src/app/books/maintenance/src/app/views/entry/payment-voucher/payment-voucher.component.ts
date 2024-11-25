import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { ReceiptEntry } from 'src/app/models/Entry/ReceiptEntry';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';

@Component({
  selector: 'app-payment-voucher',
  templateUrl: './payment-voucher.component.html',
  styleUrls: ['./payment-voucher.component.scss']
})
export class PaymentVoucherComponent {

  // public receiptFrom:FormGroup;
  // public voucher: any;

  
  // // public ledger_SubLedger:Receipt[]= new Array<Receipt>();
  // public ledger_SubLedger:Receipt[]= [];
  // public ledgerSubLedger:Receipt[]=[];
  // public receiptEntryModel: ReceiptEntry=new ReceiptEntry();
  // public receiptModel: Receipt=new Receipt();
  // public toamount: string=null;
  // public fromamount: string=null;

  // public creaditLedgerName:string;
  // public creaditLedgerCode:string;
  // public creaditSubLedgerCode:string;
  // public creaditLedgerId:number;
  // public creaditSubLedgerId:number;
  // public debitLedgerName:string;
  // public debitLedgerCode:string;
  // public debitSubLedgerCode:string;
  // public debitLedgerId:number;
  // public debitSubLedgerId:number;
  // public creditUniqId:number;
  // public debitUniqId:number;
  // public datePipeString:string;

  // constructor(
  //   private toastr: ToastrService,
  //   private fb: FormBuilder,
  //   private accHeadService: AccHeadService,
  //   private datePipe: DatePipe
  // ) {

  //   this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
  //   console.log(this.datePipeString);
  //   }
  // ngOnInit(): void {
  //   this.createFrom();
  //   this.getVoucherNumber();
  //   this.loadCategoriesForCreadit();
  //   this.loadCategoriesForDebit();
  // }

  // getVoucherNumber(){
  //   let type='Payment';
  //   this.accHeadService.getVoucherNumber(type).subscribe({
  //     next: (result) => {
  //       this.voucher=result.data;
  //       console.log(this.voucher);
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     },
  //   });

  // }

  // loadCategoriesForCreadit() {
  //   this.accHeadService.getAllCategoryAccHeadCategoryId(19).subscribe({
  //     next: (result) => {
  //       console.log(result,"get all category");
  //       this.ledger_SubLedger = result;
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     },
  //   });
  // } 

  // loadCategoriesForDebit() {
  //   this.accHeadService.getAllCategoryAccHeadCategoryId(16).subscribe({
  //     next: (result) => {
  //       console.log(result,"get all category");
  //       this.ledgerSubLedger = result;
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     },
  //   });
  // } 

  // getledgerFrom(ledger:any){
  //  if(ledger!=null){
  //   this.receiptModel= this.ledgerSubLedger.find(p => p.uniqId==ledger);
  //   this.creditUniqId=this.receiptModel.uniqId;
  //   this.creaditLedgerName=this.receiptModel.subLedgerName;
  //   this.creaditSubLedgerId=this.receiptModel.subLedgerId;
  //   this.creaditLedgerId=this.receiptModel.ledgerId;
  //   this.creaditLedgerCode=this.receiptModel.ledgerCode;
  //   this.creaditSubLedgerCode=this.receiptModel.subLedgerCode;
 
  //   this.accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
  //    this.toamount=res.data as any;
  //    })
  //  }
  //  else{
  //   this.fromval.creaditUniqId=null;
  //   this.toamount=null;
  // }
   
  // }


  // getledgerTo(ledger:any){
  //   if(ledger!=null){
  //     this.receiptModel= this.ledger_SubLedger.find(p => p.uniqId==ledger);
  //     this.debitUniqId=this.receiptModel.uniqId;
  //     this.debitLedgerName=this.receiptModel.subLedgerName;
  //     this.debitSubLedgerId=this.receiptModel.subLedgerId;
  //     this.debitLedgerId=this.receiptModel.ledgerId;
  //     this.debitLedgerCode=this.receiptModel.ledgerCode;
  //     this.debitSubLedgerCode=this.receiptModel.subLedgerCode;
      
  //     this.accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
  //     this.fromamount=res.data as any;
  //     })
  //   }
  //   else{
  //     this.fromval.debitUniqId=null;
  //     this.fromamount=null;
  //    }
   
  //  }

  //  saveReceipt(){
  //     if(this.receiptFrom.invalid){
  //       this.toastr.info("Please provied valid information");
  //     }
  //     else{
  //       this.accHeadService.saveReceiptEntry(this.fromval).subscribe((res:any)=>{
  //         this.showToast(res);
  //         this.creaditLedgerName='';
  //         this.creaditLedgerCode='';
  //         this.creaditSubLedgerCode='';
  //         this.creaditLedgerId=0;
  //         this.creaditSubLedgerId=0;
  //         this.debitLedgerName='';
  //         this.debitLedgerCode='';
  //         this.debitSubLedgerCode='';
  //         this.debitLedgerId=0;
  //         this.debitSubLedgerId=0;
  //         this.debitUniqId=0;
  //         this.creditUniqId=0;
  //         this.toamount=null;
  //         this.fromamount=null;
  //         this.getVoucherNumber();
  //         this.createFrom();
  //       })
  //     }
      
    
  //  }
  // createFrom(){
  //   this.receiptFrom=this.fb.group({
  //     creaditAccLedgerName: ['',[]],
  //     creaditLedgerId: [0,[]],
  //     creaditSubLedgerId: [0,[]],
  //     creaditLedgerCode: ['',[]],
  //     creaditSubLedgerCode: ['',[]],
  //     debitAccLedgerName: ['',[]],
  //     debitLedgerId: [0,[]],
  //     debitSubLedgerId: [0,[]],
  //     debitLedgerCode: ['',[]],
  //     debitSubLedgerCode: ['',[]],
  //     creaditUniqId: [,[Validators.required]],
  //     debitUniqId: [,[Validators.required]],
  //     amount: [0,[Validators.required]],
  //     narration:['',[]],
  //     status:['',[]],
  //     voucherNumber:[],
  //     voucherType:['Payment'],
  //     createdDate:[this.datePipeString],
  //   })
  // }

  // showToast(toastmsg:any){
  //   if (toastmsg.status == 200) {
  //     this.toastr.success(toastmsg.message);
  //   } else if (toastmsg.status == 201) {
  //     this.toastr.warning(toastmsg.message);
  //   } else if (toastmsg.status == 202) {
  //     this.toastr.info(toastmsg.message);
  //   } else {
  //     this.toastr.error(toastmsg.message);
  //   }

  // }

  // get fromval(){
  //   return this.receiptFrom.value;
  // }
  // get g() {
  //   return this.receiptFrom.controls;
  // }

}

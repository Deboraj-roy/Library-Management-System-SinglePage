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
import { UserService } from 'src/app/services/users/user.service';
import { UsersVM } from 'src/app/models/users/UsersVM';
import { NumberFormatPipe } from 'src/app/number-format.pipe';
import * as factory from '@angular/language-service';

@Component({
  selector: 'app-bank-receipt-voucher',
  templateUrl: './bank-receipt-voucher.component.html',
  styleUrls: ['./bank-receipt-voucher.component.scss']
})
export class BankReceiptVoucherComponent {
   public bankReceiptForm:FormGroup;
   public datePipeString:any;
   public ledgerList:any[]=[];
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
    private _UserService: UserService,
    private _NumberFormatPipe: NumberFormatPipe,
    
  ) {
    this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    }
  ngOnInit(): void {
    this.createForm();
    this.getAllCategoryMajorCategoryId();
    this.getMinorCategoryByMajorCategoryId();
    this.loadCategoriesForDebit();
    this.getAllParty();
    this.getVoucherNumber();
    this.loadddlUsers();
    this.showFields = false; 
  }
  
  numberFormat(number: number): string {
    return this._NumberFormatPipe.transform(number);
  }

  getAllParty(){
    this._partyService.getAllParty().subscribe((res:any)=>{
      this.partyList=res as PartyViewModel[];
      console.log(this.partyList,"this.partyList,");
    })
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

  getMinorCategoryByMajorCategoryId(){
    let id=93;
    this._entryService.getMinorCategoryByMajorCategory(id).subscribe((res:any)=>{
      this.listOfMinorCategory=res as MinorCategory[];
    })
  }

  getAllCategoryMajorCategoryId(){
    let id=55;
    this._entryService.getAllCategoryMajorCategoryId(id).subscribe((res:any)=>{
      this.ledgerList=res as any[];
    })
  }
  getVoucherNumber(){
    let type='BankRecept';
    this._accHeadService.getVoucherNumber(type).subscribe({
      next: (result) => {
        this.voucher=result.data;
      },
      error: (response) => {
      },
    });
  }
  
  loadCategoriesForDebit() {
    let id=0;
    this._accHeadService.getAllCategoryAccHeadCategoryId(id).subscribe({
      next: (result) => {
        this.ledgerSubLedger = result;
      },
      error: (response) => {
      },
    });
  }
  
  getDebitAmount(amount:any){
    var i=0;
    this.debitAmounttotal=0;
    for(i=0;i<(<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).length;i++){
      this.debitAmounttotal += (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(i).get('amount').value;
    }
  }
  getCreaditAmount(amount:any){
    var i=0;
    this.creditAmounttotal=0;
    for(i=0;i<(<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).length;i++){
      this.creditAmounttotal+=(<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(i).get('amount').value;
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
            this.getVoucherNumber();
            this.createForm();
            this.fromamount=null;
            this.loadddlUsers();
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
              this.createForm();
              this.fromamount=null;
              this.loadddlUsers();
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
      
     this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
      this.fromNameAmount=res as any;
      this.fromamount=this.fromNameAmount.balance;
      this.fromName=this.fromNameAmount.headName;
      (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(this.fromamount);
      (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(i).get('fromName').patchValue(this.fromName);
    });
    (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(i).patchValue({
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
    (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(i).get('debitbalance').patchValue(null);
    (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(i).get('fromName').patchValue(null);
     }
  }
  getledgerFrom(uniqIdCredit:any,i:any){
      if(uniqIdCredit!=null){
        this.receiptModel= this.ledgerSubLedger.find(p => p.uniqId==uniqIdCredit);
        this._accHeadService.getLedgerLastBalance(this.receiptModel.ledgerId,this.receiptModel.subLedgerId).subscribe((res:any)=>{
          this.toNameAmount=res as any;
          this.toamount=this.toNameAmount.balance;
          this.toName=this.toNameAmount.headName;
          (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(this.toamount);
          (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(i).get('toName').patchValue(this.toName);
       });
      (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(i).patchValue({
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
        (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(i).get('creaditbalance').patchValue(null);
        (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(i).get('toName').patchValue(null);
      }
  }
  removeDebit(i:any){
    (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).removeAt(i);
    var n=0;
    this.debitAmounttotal=0;
    for(n=0;n<(<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).length;n++){
      this.debitAmounttotal += (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).at(n).get('amount').value;
    }
  }
  addDebit(){
    (<FormArray>this.bankReceiptForm.get('multipleDebitEntry')).push(this.addBankReceiptDebit());
  }
  removeCreadit(i:any){
    (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).removeAt(i);
    var n=0;
    this.creditAmounttotal=0;
    for(n=0;n<(<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).length;n++){
      this.creditAmounttotal+=(<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).at(n).get('amount').value;
    }
  }
  addCreadit(){
    (<FormArray>this.bankReceiptForm.get('multipleCreaditEntry')).push(this.addBankReceiptCredit());
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
    this.bankReceiptForm=this._fb.group({
        narration:[,[Validators.required]],
        voucherNumber:[''],
        userId: 1,
        voucherType:['BankRecept'], 
        //partyId:[,[]], 
        createdDate:[this.datePipeString], 
        multipleDebitEntry:this._fb.array([
         this.addBankReceiptDebit()
        ]),
        multipleCreaditEntry:this._fb.array([
          this.addBankReceiptCredit()
         ]),
    })
  }

  addBankReceiptCredit():FormGroup{
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

  addBankReceiptDebit():FormGroup{
    return this._fb.group({
        debitAccLedgerName:[''],
        debitLedgerId:[0],
        debitSubLedgerId:[0],
        debitLedgerCode:[''],
        debitSubLedgerCode:[''],
        debitUniqId:[,[Validators.required]], 
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
    return this.bankReceiptForm.value;
  }
  get g() {
    return this.bankReceiptForm.controls;
  }
}

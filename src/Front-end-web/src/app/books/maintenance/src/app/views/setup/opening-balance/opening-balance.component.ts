import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccOpeningBalance } from 'src/app/models/acc-heads/AccOpeningBalance';
import { AccLedgerOpeningBalance } from 'src/app/models/Entry/AccLedgerOpeningBalance';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { EntryService } from 'src/app/services/Entry/entry.service';

@Component({
  selector: 'app-opening-balance',
  templateUrl: './opening-balance.component.html',
  styleUrls: ['./opening-balance.component.scss']
})
export class OpeningBalanceComponent {
   
   public openingBalanceFrom:FormGroup;
   public buttonStatus:string='Save Opening Balance';
   public datePipeString:any;


   public AccLedgerOpening:AccLedgerOpeningBalance =new AccLedgerOpeningBalance();
   public minorCategoryId:any=0;
   public minorSubCategoryId:any=0;
   public subLedgerCode:any;
   public ledgerCode:any;
   public accName:any;


   public openingBalanceDate:any;
   public amount:any;
   public type:any;
   public accId:any;
   public searchText:any;
   public accOpeningBalance:AccOpeningBalance =new AccOpeningBalance();
   public receiptModel:Receipt =new Receipt();
   public listAccLedger:any[]=[];
   public listOpeningBalance:any[]=[];
   public listBalanceType:any[]=[{id:1,name:"Dr"},{id:2,name:"Cr"}];

   

   constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _accHeadService: AccHeadService,
    private _entryService: EntryService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    }

    formatNumberWithCustomPattern(number: number): string {
      return this.decimalPipe.transform(number, '1.2-2');
    }
  
  ngOnInit(): void {
    this.create();
    this.getOpeningBalance();
    this.loadCategoriesForDebit();
  }
  getOpeningBalance(){
    this._entryService.getOpeningBalance().subscribe((res:any)=>{
      this.listOpeningBalance=res as any[];

      
    })
  }

  
  loadCategoriesForDebit() {
    let id=-1;
    // let id=5;
    this._entryService.getAllCategoryMajorCategoryId(id).subscribe({
      next: (result) => {
        this.listAccLedger = result as any [];
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  getLedger(model:any){
    this.minorCategoryId=model.ledgerId;
    this.minorSubCategoryId=model.subLedgerId;
    this.ledgerCode=model.ledgerCode;
    this.subLedgerCode=model.subLedgerCode;
    this.accName=model.subLedgerName;
  }

  editOpeningBalance(model:any ){
    this.openingBalanceDate=this._datePipe.transform(model.openingBalanceDate,'yyyy-MM-dd');
    this.amount=model.balance;
    this.type=model.balanceType;
    this.accId=model.accOpeningBalanceId;
  }

  updateOpeningBalanc(date:any,balance:any){
    let opening = new AccOpeningBalance();
    opening.accOpeningBalanceId=this.accId;
    opening.balance=balance;
    opening.balanceType=this.type;
    opening.openingBalanceDate=date;
    this._entryService.saveOpeningBalance(opening).subscribe((res:any)=>{
      this.showToast(res);
      this.create();
      this.getOpeningBalance();
      })

      let open= new AccLedgerOpeningBalance();
      open.accLedgerId=this.accId;
      open.balance=balance;
      open.balanceType=this.type;
      open.createdDate=date;

      this._entryService.saveOpeningBalanceLedger(open).subscribe((res:any)=>{
        this.showToast(res);
      })
  }
  
  saveOpeningBalance(){
    this.fromval.minorCategoryId=this.minorCategoryId;
    this.fromval.minorSubCategoryId=this.minorSubCategoryId;   
    this._entryService.saveOpeningBalance(this.fromval).subscribe((res:any)=>{
    this.showToast(res);
    this.create();
    this.getOpeningBalance();
    })

    this.AccLedgerOpening.accLedgerId=0;
    this.AccLedgerOpening.accLedgerName=this.accName;
    this.AccLedgerOpening.ledgerId=this.minorCategoryId;
    this.AccLedgerOpening.ledgerCode=this.ledgerCode;
    this.AccLedgerOpening.subLedgerId=this.minorSubCategoryId;
    this.AccLedgerOpening.subLedgerCode=this.subLedgerCode;
    this.AccLedgerOpening.balance=this.fromval.balance;
    this.AccLedgerOpening.balanceType=this.fromval.balanceType;
    this.AccLedgerOpening.createdDate=this.fromval.openingBalanceDate;
    this._entryService.saveOpeningBalanceLedger(this.AccLedgerOpening).subscribe((res:any)=>{
      this.showToast(res);
    })
  }

  create(){
      this.openingBalanceFrom=this._fb.group({
      accOpeningBalanceId:[0,[]],
      minorCategoryId:[this.minorCategoryId,[]],
      minorSubCategoryId:[this.minorSubCategoryId,[]],
      balance:[,[]],
      quantity:[,[]],
      balanceType:[,[]],
      openingBalanceDate:[this.datePipeString,[]]
    })
  }

  get fromval(){
    return this.openingBalanceFrom.value;
  }
  get g() {
    return this.openingBalanceFrom.controls;
  }

  showToast(toastmsg: any) {
    if (toastmsg.status == 200) {
      this._toastr.success(toastmsg.message);
    } else if (toastmsg.status == 201) {
      this._toastr.success(toastmsg.message);
    } else if (toastmsg.status == 202) {
      this._toastr.info(toastmsg.message);
    } else {
      this._toastr.error(toastmsg.message);
    }
  }

}

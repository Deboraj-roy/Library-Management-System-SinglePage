import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-receipt-payment-statement',
  templateUrl: './receipt-payment-statement.component.html',
  styleUrls: ['./receipt-payment-statement.component.scss']
})
export class ReceiptPaymentStatementComponent {

public listOfBankPayment:any[]=[];
public listOfPayment:any[]=[];

public listOfCashPayment:any[]=[];
public listOfCashPaymentComp:any[]=[];
public openingBalances:any[]=[];
public openingBalanceSecond:any[]=[];
public openBalance:any;
public openBalanceSecond:any;
public receipts:any;
public receiptsSecond:any;
public totalReceipt:any;
public totalReceipt1:any;
public totalPayment:any;
public totalPayment1:any;

public startDate:any;
public endDate:any;
public strt:any;
public endt:any;


public firstTbl:boolean=false;
public secondTbl:boolean=false;
  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.startDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.endDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.strt = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.endt = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {

  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }



  getFirstStatement(){
    this.firstTbl=true;
    this.secondTbl=false;
    this.totalPayment=0;

    let type='BankPayment';
    this._noteService.getBankPaymentStatement(this.startDate,this.endDate,this.strt,this.endt,type).subscribe((res:any)=>{
     this.listOfBankPayment=res as any[];
     let i=0;
     for(i=0;i<this.listOfBankPayment.length;i++){
      this.totalPayment=this.totalPayment+this.listOfBankPayment[i].firstBalance;
      }
    })
    let typ1='CashPayment';
    this._noteService.getBankPaymentStatement(this.startDate,this.endDate,this.strt,this.endt,typ1).subscribe((res:any)=>{
      this.listOfCashPayment=res as any[];
      let i=0;
      for(i=0;i<this.listOfCashPayment.length;i++){
       this.totalPayment=this.totalPayment+this.listOfCashPayment[i].firstBalance;
       }
    })
    
    this._noteService.getReceiptOpening(this.startDate,this.endDate,this.strt,this.endt).subscribe((res:any)=>{
      this.openingBalances= res as any[];
      this.openBalance=this.openingBalances[0].openingBalance;
      this.receipts=this.openingBalances[0].receipt;
      this.totalReceipt=this.receipts+this.openBalance;
      })
  }







  getSecondStatement(){
    this.firstTbl=false;
    this.secondTbl=true;
    this.totalPayment=0;
    this.totalPayment1=0;
    let type='BankPayment';
    this._noteService.getBankPaymentStatement(this.startDate,this.endDate,this.strt,this.endt,type).subscribe((res:any)=>{
     this.listOfPayment=res as any[];
     let i=0;
     for(i=0;i<this.listOfPayment.length;i++){
      this.totalPayment=this.totalPayment+this.listOfPayment[i].firstBalance;
      this.totalPayment1=this.totalPayment1+this.listOfPayment[i].secondBalance;
      }
    })
    let typ1='CashPayment';
    this._noteService.getBankPaymentStatement(this.startDate,this.endDate,this.strt,this.endt,typ1).subscribe((res:any)=>{
     this.listOfCashPaymentComp=res as any[];
     let i=0;
      for(i=0;i<this.listOfCashPaymentComp.length;i++){
       this.totalPayment=this.totalPayment+this.listOfCashPaymentComp[i].firstBalance;
       this.totalPayment1=this.totalPayment1+this.listOfCashPaymentComp[i].secondBalance;
       }
    })

    // secondBalance

    this._noteService.getReceiptOpening(this.startDate,this.endDate,this.strt,this.endt).subscribe((res:any)=>{
      this.openingBalanceSecond= res as any[];
      console.log(this.openingBalanceSecond,"this.openingBalanceSecond");
      this.openBalanceSecond=this.openingBalanceSecond[0].openingBalanceSecond;
      this.openBalance=this.openingBalanceSecond[0].openingBalance;
      this.receipts=this.openingBalanceSecond[0].receipt;
      this.receiptsSecond=this.openingBalanceSecond[0].receiptSecond;
      this.totalReceipt=this.receipts+this.openBalance;
      this.totalReceipt1=this.openBalanceSecond+this.receiptsSecond;
      })
  }

  
}

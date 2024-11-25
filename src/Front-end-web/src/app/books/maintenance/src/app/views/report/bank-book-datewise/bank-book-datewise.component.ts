import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';
import { Models } from 'src/app/models/PurchaseOrder/Models';

@Component({
  selector: 'app-bank-book-datewise',
  templateUrl: './bank-book-datewise.component.html',
  styleUrls: ['./bank-book-datewise.component.scss']
})
export class BankBookDatewiseComponent {

public listOfBankPayment:any[]=[];
public ddlBanks: Models[] = [];
public listOfPayment:any[]=[];
public listOfReceipt:any[]=[];
public listOfBooks:any[]=[];
public totalDebit:number = 0.0;
public totalCredit:number = 0.0;
public openingDebit:number = 0.0;
public openingCredit:number = 0.0;
public closingDebit:number = 0.0;
public closingCredit:number = 0.0;
public selectedBankName: string = '';
public selectedBankId: number = 0;
public isOpnDebit: boolean = false;
public isClsDebit: boolean = false;

public selectedAccLedgerName:any;
public selectedLedgerId:any;
public selectedSubLedgerId:any;
public selectedTotalDebit:any;
public selectedTotalCredit:any;
public transactionList:any[]=[];

public listOfCashPayment:any[]=[];
public listOfCashPaymentComp:any[]=[];
public openingBalances:any[]=[];
public openingBalanceSecond:any[]=[];
public openBalance:any;
public openBalanceSecond:any;
public receipts:any;
public closingBalance:any;


public restBalance:any;

public totalPayment:any;
public totalPayment1:any;

public startDate:any;
public endDate:any;
public strt:any;
public endt:any;


public firstTbl:boolean=false;
public secondTbl:boolean=false;
public second:boolean=false;
public opening:boolean=false;
public opening1:boolean=false;

public closing:boolean=false;
public closing1:boolean=false;

public type:any;

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];

  public IsDownload:any=false;
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

    this.loadddlBanks();
  }

  loadddlBanks() {
    this._noteService.getAllddlBanks().subscribe({
      next: (result) => {
        this.ddlBanks = result as Models[];
       console.log(this.ddlBanks);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  
  ViewTransactions(model:any){
    debugger;
    this.selectedAccLedgerName=model.accLedgerName;
    this.selectedLedgerId=model.ledgerId;
    this.selectedSubLedgerId=model.subLedgerId;
    this.selectedTotalDebit=model.debit;
    this.selectedTotalCredit=model.credit;
    this.getAllTransactions(model.ledgerId, model.subLedgerId);
  }

  getAllTransactions(ledgerId: number, subLedgerId: number){
    let type='Bank';
    this._noteService.getAllTransactions(this.startDate,this.endDate,type, this.selectedBankId, ledgerId, subLedgerId).subscribe((res:any)=>{
      this.transactionList=res as any[];
      // this.totalCost = this.transactionList[0]?.totalCostPrice;
      // this.unitCost = this.transactionList[0]?.unitCostPrice;
    })
  }


  getFirstStatement(){
    this.firstTbl=true;
    this.totalPayment=0;
    this.strt="shajol";
    let type='Bank';
    this._noteService.getBankAndCashBookListDatewise(this.startDate,this.endDate,type, this.selectedBankId).subscribe((res:any)=>{
     this.listOfBooks= res as any[];
     this.totalDebit = this.listOfBooks.reduce((accumulator, currentValue) => accumulator + currentValue["debit"], 0);
     this.totalCredit = this.listOfBooks.reduce((accumulator, currentValue) => accumulator + currentValue["credit"], 0);
     if (this.listOfBooks.length > 0) {
      this.openingDebit = this.listOfBooks[0]["openingDebit"];
      this.openingCredit = this.listOfBooks[0]["openingCredit"];
      this.closingDebit = this.listOfBooks[0]["closingDebit"];
      this.closingCredit = this.listOfBooks[0]["closingCredit"];

      this.isOpnDebit = this.openingDebit >= this.openingCredit ? true : false;
      this.isClsDebit = this.closingDebit >= this.closingCredit ? true : false;
     }else{
      this.openingDebit = 0.00;
      this.openingCredit = 0.00;
      this.closingDebit = 0.00;
      this.closingCredit = 0.00;

      this.isOpnDebit = false;
      this.isClsDebit = false;
     }
    })
    this.IsDownload=true;
    // this._noteService.getBankPaymentStatement(this.startDate,this.endDate,this.strt,this.endt,type).subscribe((res:any)=>{
    //  this.listOfBankPayment=res as any[];
    //  let i=0;
    //  for(i=0;i<this.listOfBankPayment.length;i++){
    //   this.totalPayment=this.totalPayment+this.listOfBankPayment[i].firstBalance;
    //   }
    //   let typ1='CashPayment';
    // this._noteService.getBankPaymentStatement(this.startDate,this.endDate,this.strt,this.endt,typ1).subscribe((res:any)=>{
    //   this.listOfCashPayment=res as any[];
    //   let i=0;
    //   for(i=0;i<this.listOfCashPayment.length;i++){ 
    //    this.totalPayment=this.totalPayment+this.listOfCashPayment[i].firstBalance;
    //     }
    //     this._noteService.getReceiptOpening(this.startDate,this.endDate,this.strt,this.endt).subscribe((res:any)=>{
    //       this.openingBalances= res as any[];
    //       this.openBalance=this.openingBalances[0].openingBalance;
    //       this.receipts=this.openingBalances[0].receipt;
    //       this.getRestBalance();
    //       this.getOpeningBalance();
    //       this.IsDownload=true;
    //       })
    //   })
    // })
  }

  getRestBalance(){
    if(this.receipts<this.totalPayment){
      this.secondTbl=true;
      this.second=false;
      this.restBalance=this.totalPayment-this.receipts;

      this.openBalanceSecond=this.restBalance+(this.openBalance);
      this.getClosing(this.openBalanceSecond);
    }
    else{
      this.second=true;
      this.secondTbl=false;
      this.restBalance=this.receipts-this.totalPayment;
      this.openBalanceSecond=this.restBalance+(this.openBalance);
      this.getClosingBalance(this.openBalanceSecond);
    }
  }

  getOpeningBalance(){
    if(this.openBalance>=0){
     this.opening=true;
     this.opening1=false;
    }
    else{
      this.openBalance=Math.abs(this.openBalance);
      this.opening1=true;
      this.opening=false;
    }
  }
  
  onBankSelected(event: any) {
    debugger;
    if(event == undefined){
      this.selectedBankId = 0;
      this.selectedBankName = "";
    }else{

      let selectedBank = this.ddlBanks.find(model => model.minorSubCategoryId === event.minorSubCategoryId);
      if (selectedBank) {
        this.selectedBankId = selectedBank.minorSubCategoryId;
        this.selectedBankName = selectedBank.minorSubCategoryName;
      }
    }
  }
  getClosing(blance:any){
   this.closingBalance=blance;
   if(this.closingBalance>=0)
   {
     this.closing=true;
     this.closing1=false;
   }
   else
   {
     this.closingBalance=Math.abs(this.closingBalance);
     this.closing=false;
     this.closing1=true;
   }
  }

  getClosingBalance(balance:any){
   this.closingBalance=balance;
   if(this.closingBalance>=0)
   {
     this.closing=true;
     this.closing1=false;
   }
   else
   {
     this.closingBalance=Math.abs(this.closingBalance);
     this.closing=false;
     this.closing1=true;
   }
  }


  getReport(){
    this._noteService.getBankAndCashBookReportDatewise(this.type,this.startDate,this.endDate,"Bank",this.selectedBankId).subscribe((res:any)=>{
      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
    })
  }

}

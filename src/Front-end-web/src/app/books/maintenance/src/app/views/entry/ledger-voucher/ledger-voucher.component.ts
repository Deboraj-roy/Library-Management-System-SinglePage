
import { DatePipe, DecimalPipe  } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';


@Component({
  selector: 'app-ledger-voucher',
  templateUrl: './ledger-voucher.component.html',
  styleUrls: ['./ledger-voucher.component.scss']
})
export class LedgerVoucherComponent {
  public ledgerList:any[];
  public ledgerNameList:any[]=[];
  public ledgerNameListView:any[]=[];
  public startdate:any;
  public enddate:any;
  datePipe: DatePipe = new DatePipe('en-US');
  decimalPipe: DecimalPipe = new DecimalPipe('en-US');

  public accledgerName:any;
  public ledgerId:number=0;
  public subledgerId:number=0;
  public receiptModel:Receipt=new Receipt();
  public openingBalance:any;
  public BalanceType:any;
  public BalanceDr:any;
  public BalanceCr:any;
  public count:any;
  public totalDebit:any;
  public totalCreditt:any;
  
  
  
  constructor(
    private toastr: ToastrService,
    private accHeadService: AccHeadService,
    private _entryService: EntryService,
    private _datePipe: DatePipe,
  ) {
    this.startdate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.enddate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {  
   this.getAllLedgerName();
  }
  
  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  getAllLedgerName(){
    let id=-3;
    this._entryService.getAllCategoryMajorCategoryId(id).subscribe((res:any)=>{
    this.ledgerNameList=res as any[];
   })
  }
  getLedgerId(id:any){
    this.receiptModel=this.ledgerNameList.find(p=>p.uniqId==id);
    this.ledgerId=this.receiptModel.ledgerId;
    this.subledgerId=this.receiptModel.subLedgerId;
    console.log(this.receiptModel,"this.receiptModel");
  }
  getAllLedger(){
   if(this.ledgerId!=0 && this.startdate!="")
    {
      var date = new Date();
      var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
      if(this.enddate==''){
        this.enddate=transformDate.toString();
      }
      this.accHeadService.getLedgerOpeningBalance(this.startdate,this.ledgerId,this.subledgerId).subscribe((res:any)=>{
        this.openingBalance=res as any;
        this.BalanceType=this.openingBalance.balanceType;
        if(this.BalanceType=='Cr')
        {
          this.BalanceDr=0;
          this.BalanceCr=this.openingBalance.balance;
        }
        else{
          this.BalanceDr=this.openingBalance.balance;
          this.BalanceCr=0;
        }
        
      })
      this.accHeadService.getAllLedger(this.startdate,this.enddate,this.ledgerId,this.subledgerId).subscribe((res:any)=>{
        this.ledgerList=res as any[];
        this.count=this.ledgerList.length;
        
        this.totalCreditt=0;
        this.totalDebit=0;
        let i=0;
        for(i;i<this.count;i++){
          this.totalCreditt=this.totalCreditt+this.ledgerList[i].credit;
          this.totalDebit= this.totalDebit+this.ledgerList[i].debit;
        }
        })
    }
    else{
      this.toastr.info("Please Select Account Name and Start Date");
    }
  }
  
}

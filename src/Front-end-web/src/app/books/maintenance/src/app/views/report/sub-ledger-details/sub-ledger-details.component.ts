import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';

@Component({
  selector: 'app-sub-ledger-details',
  templateUrl: './sub-ledger-details.component.html',
  styleUrls: ['./sub-ledger-details.component.scss']
})
export class SubLedgerDetailsComponent {

  public ledgerList:any[];
  public ledgerNameList:any[]=[];
  public ledgerNameListView:any[]=[];
  public startdate:any='';
  public enddate:any='';
  datePipe: DatePipe = new DatePipe('en-US');

  public accledgerName:any;
  public ledgerId:number=0;
  public subledgerId:number=0;
  public receiptModel:Receipt=new Receipt();
  public openingBalance:any;
  public BalanceType:any;
  public BalanceDr:any;
  public BalanceCr:any;
  public count:any;
  public subLedgerViewModel:any;
  public fiscalYear:any[]=[];
  public fiscal:any;


  constructor(
    private toastr: ToastrService,
    private accHeadService: AccHeadService,
    private _entryService: EntryService,
  ) {}
  
  ngOnInit(): void {
    this.getFiscalYear();
    this.subLedgerViewModel=history.state;

    console.log(this.subLedgerViewModel);
    this.ledgerId=this.subLedgerViewModel.ledgerId;
    this.subledgerId=this.subLedgerViewModel.subLedgerId;
  }

  getFiscalYear(){
    this._entryService.getFiscalYear().subscribe((res:any)=>{
      this.fiscalYear=res as any[];
      this.getAllLedger();
    })
  }

  
  
  getAllLedger(){
    this.fiscal=this.fiscalYear.find(p=>p.status==1);
      this.startdate=this.fiscal.startMonthName;
      this.enddate=this.fiscal.endMonthName;
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

      this.accHeadService.getAllLedgerByLedgerId(this.startdate,this.enddate,this.ledgerId,this.subledgerId).subscribe((res:any)=>{
        this.ledgerList=res as any[];
        this.count=this.ledgerList.length;
        })

    }
    else{
      this.toastr.info("Please Select Account Name and Start Date");
    }
  }
}


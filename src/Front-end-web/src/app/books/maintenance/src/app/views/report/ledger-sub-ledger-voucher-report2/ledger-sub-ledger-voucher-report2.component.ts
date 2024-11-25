import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { NoteService } from 'src/app/services/Note/note.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';

@Component({
  selector: 'app-ledger-sub-ledger-voucher-report2',
  templateUrl: './ledger-sub-ledger-voucher-report2.component.html',
  styleUrls: ['./ledger-sub-ledger-voucher-report2.component.scss']
})
export class LedgerSubLedgerVoucherReport2Component {
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
  public totalDebit:any;
  public totalCredit:any;

  public type:any;

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];
  
  
  
  constructor(
    private toastr: ToastrService,
    private accHeadService: AccHeadService,
    private _entryService: EntryService,
    private _noteService: NoteService,
    private _datePipe: DatePipe,
  ) {
    this.startdate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.enddate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {  
   this.getAllLedgerName();
  }
  getAllLedgerName(){
  let id=0;
  this.accHeadService.getAllCategoryAccHeadCategoryId(id).subscribe((res:any)=>{
    this.ledgerNameList=res as any[];
    console.log(this.ledgerNameList.length,"this.ledgerNameList.length");
  })
  }
  getLedgerId(id:any){
    console.log(id,"id");
    if(id==undefined){
      this.ledgerId=0;
      this.subledgerId=0;
    }
    else{
      this.receiptModel=this.ledgerNameList.find(p=>p.uniqId==id);
      this.ledgerId=this.receiptModel.ledgerId;
      this.subledgerId=this.receiptModel.subLedgerId;
    }
    
  }
  getAllLedger(){
    debugger;
   if(this.ledgerId!=0 && this.startdate!="")
    {
      var date = new Date();
      var transformDate = this.datePipe.transform(date, 'yyyy-MM-dd');
      if(this.enddate==''){
        this.enddate=transformDate.toString();
      }
      this.accHeadService.getLedgerOpeningBalance(this.startdate,this.ledgerId,this.subledgerId).subscribe((res:any)=>{
        this.openingBalance=res as any;
        console.log(this.openingBalance,"this.openingBalancethis.openingBalancethis.openingBalancethis.openingBalance");
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
      this.accHeadService.getAllLedger2(this.startdate,this.enddate,this.ledgerId,this.subledgerId).subscribe((res:any)=>{
        this.ledgerList=res as any[];
        this.count=this.ledgerList.length;

        this.totalCredit=0;
        this.totalDebit=0;
        let i=0;
        for(i;i<this.count;i++){
          this.totalCredit=this.totalCredit+this.ledgerList[i].credit;
          this.totalDebit= this.totalDebit+this.ledgerList[i].debit;
        }

        })
    }
    else{
      this.toastr.info("Please Select Account Name and Start Date");
    }
  }

  getReport(){
    this._noteService.getVoucherListReport(this.type,this.ledgerId,this.subledgerId,this.startdate,this.enddate).subscribe((res:any)=>{
      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
    })
    
  }

}

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Receipt } from 'src/app/models/Entry/Receipt';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { NoteService } from 'src/app/services/Note/note.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';

@Component({
  selector: 'app-all-ledgers',
  templateUrl: './all-ledgers.component.html',
  styleUrls: ['./all-ledgers.component.scss']
})
export class AllLedgersComponent {

  public ledgerList:any[];
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

  ngOnInit(): void {  }
  getAllLedger(){
   if(this.startdate!="" && this.enddate!="")
    {
      this.accHeadService.getAllLedger(this.startdate,this.enddate,0,0).subscribe((res:any)=>{
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
      this.toastr.info("Please Select Start Date");
    }
  }

  getReport(){
    this._noteService.getVoucherListReport(this.type,0,0,this.startdate,this.enddate).subscribe((res:any)=>{
      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
    })
  }
}

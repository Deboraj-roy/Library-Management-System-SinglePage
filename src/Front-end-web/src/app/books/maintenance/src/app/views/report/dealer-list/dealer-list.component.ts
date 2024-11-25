import { DatePipe, DecimalPipe  } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { DealerListViewModel } from 'src/app/models/Entry/DealerListViewModel';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.scss']
})
export class DealerListComponent {

  public dealerList:DealerListViewModel[]=[];
  public searchText:any;
  public valuess:any;
  public report:any;
  public totalDebit:any=0;
  public totalCredit:any=0;
  public toDate:any;

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];
  public dealterType: any[] = [
    { id: 1, name: 'Account Payable' },
    { id: 2, name: 'Account Receivable'},
  ];

  constructor(
    private _toastr: ToastrService,
    private _datePipe: DatePipe,
    private _entryService: EntryService,
    private _noteService: NoteService,
    private decimalPipe: DecimalPipe,
  ) {
    
    this.toDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getalldealerr();
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

getalldealerr(){
  debugger;
  if(this.valuess==null || this.valuess==undefined){
    this.valuess=0;
  }
  this.getAllDealer(this.valuess);
  if(this.valuess==0){
    this.valuess=null;
  }
  
}


   getAllDealer(i:any){
    this.totalDebit=0;
    this.totalCredit=0;
      this._entryService.getAllDealer(i,this.toDate).subscribe((res:any)=>{
      this.dealerList= res as DealerListViewModel[];

      for(let i=0;i<this.dealerList.length;i++)
      {
        this.totalDebit= this.totalDebit+this.dealerList[i].debit;
        this.totalCredit= this.totalCredit+this.dealerList[i].credit;
      }
    })
   }

   getReport(){
    if(this.valuess==null){
      this.valuess=0;
    }

      this._noteService.getDealerListReport(this.report,this.valuess,this.toDate).subscribe((res:any)=>{

      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
      })
    if(this.valuess==0){
      this.valuess=null;
    }
   }
}

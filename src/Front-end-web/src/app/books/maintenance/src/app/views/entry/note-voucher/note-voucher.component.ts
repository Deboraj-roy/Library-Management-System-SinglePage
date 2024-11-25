import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteViewModel } from 'src/app/models/Note/NoteViewModel';
import { AccLedgersView } from 'src/app/models/Entry/AccLedgersView';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { NoteService } from 'src/app/services/Note/note.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-note-voucher',
  templateUrl: './note-voucher.component.html',
  styleUrls: ['./note-voucher.component.scss']
})
export class NoteVoucherComponent {

  public noteList:NoteViewModel[];
  public accLedgerListByNoteId:AccLedgersView[];
  public ledgerNameList:any[]=[];
  public ledgerNameListView:any[]=[];
  public startdate:any;
  public enddate:any;
  public noteId:number=0;
  public totalDebit:number = 0.0;
  public totalCredit:number = 0.0;
  public open:boolean=false;

  constructor(
    private toastr: ToastrService,
    private accHeadService: AccHeadService,
    private _noteService: NoteService,
    private _entryService: EntryService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.startdate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.enddate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {  
    this.getAllNotes();
   }

   formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

   getAllNotes(){
    this._noteService.getAllNote().subscribe((res:any)=>{
      this.noteList=res as NoteViewModel [];
      console.log(this.noteList);
    })
  }

  getVoucherByNoteId(noteId:any){
    if(noteId==undefined){
      this.noteId=0;
    }
    else{
     this.noteId=noteId.noteId;
    }
    
    console.log(this.noteId,"noteId.noteId");
  }

  getLedgerByNoteId(){
    if(this.startdate=='' || this.enddate=='' || this.noteId==0 ){
      this.toastr.info("Please Select Note Name");
    }
    else{
      this._entryService.getAllLedgerByNoteId(this.startdate,this.enddate,this.noteId).subscribe((res:any)=>{
        this.accLedgerListByNoteId =res as AccLedgersView[];
        if(this.accLedgerListByNoteId.length==0){
          this.totalDebit = 0.0;
          this.totalCredit = 0.0;
          this.open=true;
        }
        else{
          this.totalDebit = this.accLedgerListByNoteId.reduce((accumulator, currentValue) => accumulator + currentValue["debit"], 0);
          this.totalCredit = this.accLedgerListByNoteId.reduce((accumulator, currentValue) => accumulator + currentValue["credit"], 0);
          this.open=false;
        }
      })
    }
  }
}

import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { NoteService } from 'src/app/services/Note/note.service';
import { NoteBalanceSheet } from 'src/app/models/Note/NoteBalanceSheet';

@Component({
  selector: 'app-note-profit-loss',
  templateUrl: './note-profit-loss.component.html',
  styleUrls: ['./note-profit-loss.component.scss']
})
export class NoteProfitLossComponent {

  public secoundDate:any;
  public open:boolean=false;


  public noteLedger1:NoteBalanceSheet[];
  public noteLedger2:NoteBalanceSheet[];
  public noteLedger3:NoteBalanceSheet[];
  public noteLedger4:NoteBalanceSheet[];
  public noteLedger6:NoteBalanceSheet[];
  public noteLedger7:NoteBalanceSheet[];
  public noteLedger8:NoteBalanceSheet[];
  public noteLedger9:NoteBalanceSheet[];
  public noteLedger10:NoteBalanceSheet[];

  public noteLedger11:NoteBalanceSheet[];
  public noteLedger12:NoteBalanceSheet[];
  public noteLedger13:NoteBalanceSheet[];
  public noteLedger14:NoteBalanceSheet[];
  public noteLedger16:NoteBalanceSheet[];
  public noteLedger17:NoteBalanceSheet[];
  public noteLedger18:NoteBalanceSheet[];
  public noteLedger19:NoteBalanceSheet[];
  public noteLedger20:NoteBalanceSheet[];


  public listFiscalYear:any[];
  public activeYear:any;
  public startDate:string;
  public startCompairDate:string;
  public endDate:string;
  



  public noteTotal1:any;
  public noteTotal2:any;
  public noteTotal3:any;
  public noteTotal4:any;
  public noteTotal6:any;
  public noteTotal7:any;
  public noteTotal8:any;
  public noteTotal9:any;
  public noteTotal10:any;

  public noteTotal11:any;
  public noteTotal12:any;
  public noteTotal13:any;
  public noteTotal14:any;
  public noteTotal16:any;
  public noteTotal17:any;
  public noteTotal18:any;
  public noteTotal19:any;
  public noteTotal20:any;
  

  public noteName1:any;
  public noteName2:any;
  public noteName3:any;
  public noteName4:any;
  public noteName6:any;
  public noteName7:any;
  public noteName8:any;
  public noteName9:any;
  public noteName10:any;

  public noteName11:any;
  public noteName12:any;
  public noteName13:any;
  public noteName14:any;
  public noteName16:any;
  public noteName17:any;
  public noteName18:any;
  public noteName19:any;
  public noteName20:any;

  public noteCode1:any;
  public noteCode2:any;
  public noteCode3:any;
  public noteCode4:any;
  public noteCode6:any;
  public noteCode7:any;
  public noteCode8:any;
  public noteCode9:any;
  public noteCode10:any;

  public noteCode11:any;
  public noteCode12:any;
  public noteCode13:any;
  public noteCode14:any;
  public noteCode16:any;
  public noteCode17:any;
  public noteCode18:any;
  public noteCode19:any;
  public noteCode20:any;
  

  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _entryService: EntryService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.endDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.secoundDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
  this.getFiscalYear();
  }
  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  getFiscalYear(){
    
    this._entryService.getFiscalYear().subscribe((res:any)=>{
      this.listFiscalYear= res as any [];
      this.activeYear=this.listFiscalYear.find(p => p.status==1);
      this.startDate = this._datePipe.transform(this.activeYear.startMonthName,'yyyy-MM-dd');
      this.startCompairDate = this._datePipe.transform(this.activeYear.startMonthName,'yyyy-MM-dd');
      this.getAllByFirstDate();
    })
  
  }

  getAllByFirstDate(){
  this.getAllNoteLedger1();
  this.getAllNoteLedger2();
  this.getAllNoteLedger3();
  this.getAllNoteLedger4();
  this.getAllNoteLedger6();
  this.getAllNoteLedger7();
  this.getAllNoteLedger8();
  this.getAllNoteLedger9();
  this.getAllNoteLedger10();
  }

  getAllNoteLedger1(){
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,21).subscribe((res:any)=>{
      this.noteLedger1= res as NoteBalanceSheet[];
      this.noteName1=this.noteLedger1[0].noteName;
      this.noteCode1=this.noteLedger1[0].noteCode;
      this.noteTotal1=this.noteLedger1[this.noteLedger1.length-1].totalBalance;
    })
  }

  getAllNoteLedger2(){
    
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,22).subscribe((res:any)=>{
      this.noteLedger2= res as NoteBalanceSheet[];
      this.noteName2=this.noteLedger2[0].noteName;
      this.noteCode2=this.noteLedger2[0].noteCode;
      this.noteTotal2=this.noteLedger2[this.noteLedger2.length-1].totalBalance;
    })
  }
  getAllNoteLedger3(){
  
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,23).subscribe((res:any)=>{
      this.noteLedger3= res as NoteBalanceSheet[];
      this.noteName3=this.noteLedger3[0].noteName;
      this.noteCode3=this.noteLedger3[0].noteCode;
      this.noteTotal3=this.noteLedger3[this.noteLedger3.length-1].totalBalance;
    })
  }
  getAllNoteLedger4(){
  
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,24).subscribe((res:any)=>{
      this.noteLedger4= res as NoteBalanceSheet[];
      this.noteName4=this.noteLedger4[0].noteName;
      this.noteCode4=this.noteLedger4[0].noteCode;
      this.noteTotal4=this.noteLedger4[this.noteLedger4.length-1].totalBalance;
    })
  }
  getAllNoteLedger6(){
   
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,25).subscribe((res:any)=>{
      this.noteLedger6= res as NoteBalanceSheet[];
      this.noteName6=this.noteLedger6[0].noteName;
      this.noteCode6=this.noteLedger6[0].noteCode;
      this.noteTotal6=this.noteLedger6[this.noteLedger6.length-1].totalBalance;
    })
  }
  getAllNoteLedger7(){
    
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,26).subscribe((res:any)=>{
      this.noteLedger7= res as NoteBalanceSheet[];
      this.noteName7=this.noteLedger7[0].noteName;
      this.noteCode7=this.noteLedger7[0].noteCode;
      this.noteTotal7=this.noteLedger7[this.noteLedger7.length-1].totalBalance;
    })
  }
  getAllNoteLedger8(){
    
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,27).subscribe((res:any)=>{
      this.noteLedger8= res as NoteBalanceSheet[];
      this.noteName8=this.noteLedger8[0].noteName;
      this.noteCode8=this.noteLedger8[0].noteCode;
      this.noteTotal8=this.noteLedger8[this.noteLedger8.length-1].totalBalance;
    })
  }
  getAllNoteLedger9(){
   
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,28).subscribe((res:any)=>{
      this.noteLedger9= res as NoteBalanceSheet[];
      this.noteName9=this.noteLedger9[0].noteName;
      this.noteCode9=this.noteLedger9[0].noteCode;
      this.noteTotal9=this.noteLedger9[this.noteLedger9.length-1].totalBalance;
    })
  }
  getAllNoteLedger10(){
    this._noteService.getAllNoteLedger(this.startDate,this.endDate,29).subscribe((res:any)=>{
      this.noteLedger10= res as NoteBalanceSheet[];
      this.noteName10=this.noteLedger10[0].noteName;
      this.noteCode10=this.noteLedger10[0].noteCode;
      this.noteTotal10=this.noteLedger10[this.noteLedger10.length-1].totalBalance;
    })
  }

  getAllBySecondDate(){
    this.open=true;
    this.getAllNoteLedger11();
    this.getAllNoteLedger12();
    this.getAllNoteLedger13();
    this.getAllNoteLedger14();
    this.getAllNoteLedger16();
    this.getAllNoteLedger17();
    this.getAllNoteLedger18();
    this.getAllNoteLedger19();
    this.getAllNoteLedger20();
  }
  getAllNoteLedger11(){

    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,21).subscribe((res:any)=>{
      this.noteLedger11= res as NoteBalanceSheet[];
      this.noteName11=this.noteLedger11[0].noteName;
      this.noteCode11=this.noteLedger11[0].noteCode;
      this.noteTotal11=this.noteLedger11[this.noteLedger11.length-1].totalBalance;
    })
  }
  getAllNoteLedger12(){
    
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,22).subscribe((res:any)=>{
      this.noteLedger12= res as NoteBalanceSheet[];
      this.noteName12=this.noteLedger12[0].noteName;
      this.noteCode12=this.noteLedger12[0].noteCode;
      this.noteTotal12=this.noteLedger12[this.noteLedger12.length-1].totalBalance;
    })
  }
  getAllNoteLedger13(){
  
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,23).subscribe((res:any)=>{
      this.noteLedger13= res as NoteBalanceSheet[];
      this.noteName13=this.noteLedger13[0].noteName;
      this.noteCode13=this.noteLedger13[0].noteCode;
      this.noteTotal13=this.noteLedger13[this.noteLedger13.length-1].totalBalance;
    })
  }
  getAllNoteLedger14(){
  
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,24).subscribe((res:any)=>{
      this.noteLedger14= res as NoteBalanceSheet[];
      this.noteName14=this.noteLedger14[0].noteName;
      this.noteCode14=this.noteLedger14[0].noteCode;
      this.noteTotal14=this.noteLedger14[this.noteLedger14.length-1].totalBalance;
    })
  }
  getAllNoteLedger16(){
   
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,25).subscribe((res:any)=>{
      this.noteLedger16= res as NoteBalanceSheet[];
      this.noteName16=this.noteLedger16[0].noteName;
      this.noteCode16=this.noteLedger16[0].noteCode;
      this.noteTotal16=this.noteLedger16[this.noteLedger16.length-1].totalBalance;
    })
  }
  getAllNoteLedger17(){
    
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,26).subscribe((res:any)=>{
      this.noteLedger17= res as NoteBalanceSheet[];
      this.noteName17=this.noteLedger17[0].noteName;
      this.noteCode17=this.noteLedger17[0].noteCode;
      this.noteTotal17=this.noteLedger17[this.noteLedger17.length-1].totalBalance;
    })
  }
  getAllNoteLedger18(){
    
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,27).subscribe((res:any)=>{
      this.noteLedger18= res as NoteBalanceSheet[];
      this.noteName18=this.noteLedger18[0].noteName;
      this.noteCode18=this.noteLedger18[0].noteCode;
      this.noteTotal18=this.noteLedger18[this.noteLedger18.length-1].totalBalance;
    })
  }
  getAllNoteLedger19(){
   
    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,28).subscribe((res:any)=>{
      this.noteLedger19= res as NoteBalanceSheet[];
      this.noteName19=this.noteLedger19[0].noteName;
      this.noteCode19=this.noteLedger19[0].noteCode;
      this.noteTotal19=this.noteLedger19[this.noteLedger19.length-1].totalBalance;
    })
  } 
  getAllNoteLedger20(){

    this._noteService.getAllNoteLedger(this.startCompairDate,this.secoundDate,29).subscribe((res:any)=>{
      this.noteLedger20= res as NoteBalanceSheet[];
      this.noteName20=this.noteLedger20[0].noteName;
      this.noteCode20=this.noteLedger20[0].noteCode;
      this.noteTotal20=this.noteLedger20[this.noteLedger20.length-1].totalBalance;
    })
  }
}

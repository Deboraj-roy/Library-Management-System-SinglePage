import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteBalanceSheet } from 'src/app/models/Note/NoteBalanceSheet';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-balance-sheet-note',
  templateUrl: './balance-sheet-note.component.html',
  styleUrls: ['./balance-sheet-note.component.scss']
})
export class BalanceSheetNoteComponent {


  public compDate:any;
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
  public noteLedger15:NoteBalanceSheet[];
  public noteLedger16:NoteBalanceSheet[];
  public noteLedger17:NoteBalanceSheet[];
  public noteLedger18:NoteBalanceSheet[];
  public noteLedger19:NoteBalanceSheet[];
  public noteLedger21:NoteBalanceSheet[];

  public noteLedgerA:NoteBalanceSheet[];
  public noteLedgerB:NoteBalanceSheet[];
  public noteLedgerC:NoteBalanceSheet[];
  public noteLedgerD:NoteBalanceSheet[];
  public noteLedgerE:NoteBalanceSheet[];
  public noteLedgerF:NoteBalanceSheet[];
  public noteLedgerG:NoteBalanceSheet[];
  public noteLedgerH:NoteBalanceSheet[];
  public noteLedgerI:NoteBalanceSheet[];
  public noteLedgerJ:NoteBalanceSheet[];
  public noteLedgerK:NoteBalanceSheet[];
  public noteLedgerL:NoteBalanceSheet[];
  public noteLedgerM:NoteBalanceSheet[];
  public noteLedgerN:NoteBalanceSheet[];
  public noteLedgerO:NoteBalanceSheet[];
  public noteLedgerP:NoteBalanceSheet[];
  public noteLedgerQ:NoteBalanceSheet[];
  public noteLedgerR:NoteBalanceSheet[];
  public noteLedgerS:NoteBalanceSheet[];

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
  public noteTotal15:any;
  public noteTotal16:any;
  public noteTotal17:any;
  public noteTotal18:any;
  public noteTotal19:any;
  public noteTotal21:any;

  public noteTotalA:any;
  public noteTotalB:any;
  public noteTotalC:any;
  public noteTotalD:any;
  public noteTotalE:any;
  public noteTotalF:any;
  public noteTotalG:any;
  public noteTotalH:any;
  public noteTotalI:any;
  public noteTotalJ:any;
  public noteTotalK:any;
  public noteTotalL:any;
  public noteTotalM:any;
  public noteTotalN:any;
  public noteTotalO:any;
  public noteTotalP:any;
  public noteTotalQ:any;
  public noteTotalR:any;
  public noteTotalS:any;

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
  public noteName15:any;
  public noteName16:any;
  public noteName17:any;
  public noteName18:any;
  public noteName19:any;
  public noteName21:any;


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
  public noteCode15:any;
  public noteCode16:any;
  public noteCode17:any;
  public noteCode18:any;
  public noteCode19:any;
  public noteCode21:any;



  public noteNameA:any;
  public noteNameB:any;
  public noteNameC:any;
  public noteNameD:any;
  public noteNameE:any;
  public noteNameF:any;
  public noteNameG:any;
  public noteNameH:any;
  public noteNameI:any;
  public noteNameJ:any;
  public noteNameK:any;
  public noteNameL:any;
  public noteNameM:any;
  public noteNameN:any;
  public noteNameO:any;
  public noteNameP:any;
  public noteNameQ:any;
  public noteNameR:any;
  public noteNameS:any;

  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.compDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.secoundDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
  this.getAllNoteLedger1();
  this.getAllNoteLedger2();
  this.getAllNoteLedger3();
  this.getAllNoteLedger4();
  this.getAllNoteLedger6();
  this.getAllNoteLedger7();
  this.getAllNoteLedger8();
  this.getAllNoteLedger9();
  this.getAllNoteLedger10();
  this.getAllNoteLedger11();
  this.getAllNoteLedger12();
  this.getAllNoteLedger13();
  this.getAllNoteLedger14();
  this.getAllNoteLedger15();
  this.getAllNoteLedger16();
  this.getAllNoteLedger17();
  this.getAllNoteLedger18();
  this.getAllNoteLedger19();
  this.getAllNoteLedger21();
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
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
  this.getAllNoteLedger11();
  this.getAllNoteLedger12();
  this.getAllNoteLedger13();
  this.getAllNoteLedger14();
  this.getAllNoteLedger15();
  this.getAllNoteLedger16();
  this.getAllNoteLedger17();
  this.getAllNoteLedger18();
  this.getAllNoteLedger19();
  this.getAllNoteLedger21();
  }



  getAllNoteLedger1(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,1).subscribe((res:any)=>{
      this.noteLedger1= res as NoteBalanceSheet[];
      this.noteName1=this.noteLedger1[0].noteName;
      this.noteCode1=this.noteLedger1[0].noteCode;
      this.noteTotal1=this.noteLedger1[this.noteLedger1.length-1].totalBalance;
    })
  }

  getAllNoteLedger2(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,2).subscribe((res:any)=>{
      this.noteLedger2= res as NoteBalanceSheet[];
      this.noteName2=this.noteLedger2[0].noteName;
      this.noteCode2=this.noteLedger2[0].noteCode;
      this.noteTotal2=this.noteLedger2[this.noteLedger2.length-1].totalBalance;
    })
  }
  getAllNoteLedger3(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,3).subscribe((res:any)=>{
      this.noteLedger3= res as NoteBalanceSheet[];
      this.noteName3=this.noteLedger3[0].noteName;
      this.noteCode3=this.noteLedger3[0].noteCode;
      this.noteTotal3=this.noteLedger3[this.noteLedger3.length-1].totalBalance;
    })
  }
  getAllNoteLedger4(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,4).subscribe((res:any)=>{
      this.noteLedger4= res as NoteBalanceSheet[];
      this.noteName4=this.noteLedger4[0].noteName;
      this.noteCode4=this.noteLedger4[0].noteCode;
      this.noteTotal4=this.noteLedger4[this.noteLedger4.length-1].totalBalance;
    })
  }
  getAllNoteLedger6(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,5).subscribe((res:any)=>{
      this.noteLedger6= res as NoteBalanceSheet[];
      this.noteName6=this.noteLedger6[0].noteName;
      this.noteCode6=this.noteLedger6[0].noteCode;
      this.noteTotal6=this.noteLedger6[this.noteLedger6.length-1].totalBalance;
    })
  }
  getAllNoteLedger7(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,6).subscribe((res:any)=>{
      this.noteLedger7= res as NoteBalanceSheet[];
      this.noteName7=this.noteLedger7[0].noteName;
      this.noteCode7=this.noteLedger7[0].noteCode;
      this.noteTotal7=this.noteLedger7[this.noteLedger7.length-1].totalBalance;
    })
  }
  getAllNoteLedger8(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,7).subscribe((res:any)=>{
      this.noteLedger8= res as NoteBalanceSheet[];
      this.noteName8=this.noteLedger8[0].noteName;
      this.noteCode8=this.noteLedger8[0].noteCode;
      this.noteTotal8=this.noteLedger8[this.noteLedger8.length-1].totalBalance;
    })
  }
  getAllNoteLedger9(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,8).subscribe((res:any)=>{
      this.noteLedger9= res as NoteBalanceSheet[];
      this.noteName9=this.noteLedger9[0].noteName;
      this.noteCode9=this.noteLedger9[0].noteCode;
      this.noteTotal9=this.noteLedger9[this.noteLedger9.length-1].totalBalance;
    })
  }
  getAllNoteLedger10(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,9).subscribe((res:any)=>{
      this.noteLedger10= res as NoteBalanceSheet[];
      this.noteName10=this.noteLedger10[0].noteName;
      this.noteCode10=this.noteLedger10[0].noteCode;
      this.noteTotal10=this.noteLedger10[this.noteLedger10.length-1].totalBalance;
    })
  }
  getAllNoteLedger11(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,10).subscribe((res:any)=>{
      this.noteLedger11= res as NoteBalanceSheet[];
      this.noteName11=this.noteLedger11[0].noteName;
      this.noteCode11=this.noteLedger11[0].noteCode;
      this.noteTotal11=this.noteLedger11[this.noteLedger11.length-1].totalBalance;
    })
  }
  getAllNoteLedger12(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,11).subscribe((res:any)=>{
      this.noteLedger12= res as NoteBalanceSheet[];
      this.noteName12=this.noteLedger12[0].noteName;
      this.noteCode12=this.noteLedger12[0].noteCode;
      this.noteTotal12=this.noteLedger12[this.noteLedger12.length-1].totalBalance;
    })
  }
  getAllNoteLedger13(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,12).subscribe((res:any)=>{
      this.noteLedger13= res as NoteBalanceSheet[];
      this.noteName13=this.noteLedger13[0].noteName;
      this.noteCode13=this.noteLedger13[0].noteCode;
      this.noteTotal13=this.noteLedger13[this.noteLedger13.length-1].totalBalance;
    })
  }

  getAllNoteLedger14(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,13).subscribe((res:any)=>{
      this.noteLedger14= res as NoteBalanceSheet[];
      this.noteName14=this.noteLedger14[0].noteName;
      this.noteCode14=this.noteLedger14[0].noteCode;
      this.noteTotal14=this.noteLedger14[this.noteLedger14.length-1].totalBalance;
    })
  }
  getAllNoteLedger15(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,14).subscribe((res:any)=>{
      this.noteLedger15= res as NoteBalanceSheet[];
      this.noteName15=this.noteLedger15[0].noteName;
      this.noteCode15=this.noteLedger15[0].noteCode;
      this.noteTotal15=this.noteLedger15[this.noteLedger15.length-1].totalBalance;
    })
  }
  getAllNoteLedger16(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,15).subscribe((res:any)=>{
      this.noteLedger16= res as NoteBalanceSheet[];
      //this.noteName16=this.noteLedger16[0].noteName;
      //this.noteCode16=this.noteLedger16[0].noteCode;
      for (const note of this.noteLedger16) {
        if (note.noteCode === "16") {
          this.noteName16 = note.noteName;
          this.noteCode16 = note.noteCode;
          break;
        }
      }
      this.noteTotal16=this.noteLedger16[this.noteLedger16.length-1].totalBalance;
    })
  }
  getAllNoteLedger17(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,16).subscribe((res:any)=>{
      this.noteLedger17= res as NoteBalanceSheet[];
      this.noteName17=this.noteLedger17[0].noteName;
      this.noteCode17=this.noteLedger17[0].noteCode;
      this.noteTotal17=this.noteLedger17[this.noteLedger17.length-1].totalBalance;
    })
  }
  getAllNoteLedger18(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,17).subscribe((res:any)=>{
      this.noteLedger18= res as NoteBalanceSheet[];
      this.noteName18=this.noteLedger18[0].noteName;
      this.noteCode18=this.noteLedger18[0].noteCode;
      this.noteTotal18=this.noteLedger18[this.noteLedger18.length-1].totalBalance;
    })
  }
  getAllNoteLedger19(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,18).subscribe((res:any)=>{
      this.noteLedger19= res as NoteBalanceSheet[];
      this.noteName19=this.noteLedger19[0].noteName;
      this.noteCode19=this.noteLedger19[0].noteCode;
      this.noteTotal19=this.noteLedger19[this.noteLedger19.length-1].totalBalance;
    })
  }
  getAllNoteLedger21(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.secoundDate,20).subscribe((res:any)=>{
      this.noteLedger21= res as NoteBalanceSheet[];
      this.noteName21=this.noteLedger21[0].noteName;
      this.noteCode21=this.noteLedger21[0].noteCode;
      this.noteTotal21=this.noteLedger21[this.noteLedger21.length-1].totalBalance;
    })
  }

  getAllCompDate(){
    this.open=true;
  this.getAllNoteLedgerA();
  this.getAllNoteLedgerB();
  this.getAllNoteLedgerC();
  this.getAllNoteLedgerD();
  this.getAllNoteLedgerE();
  this.getAllNoteLedgerF();
  this.getAllNoteLedgerG();
  this.getAllNoteLedgerH();
  this.getAllNoteLedgerI();
  this.getAllNoteLedgerJ();
  this.getAllNoteLedgerK();
  this.getAllNoteLedgerL();
  this.getAllNoteLedgerM();
  this.getAllNoteLedgerN();
  this.getAllNoteLedgerO();
  this.getAllNoteLedgerP();
  this.getAllNoteLedgerQ();
  this.getAllNoteLedgerR();
  this.getAllNoteLedgerS();
  }

  getAllNoteLedgerA(){
    let datePipeString='NoNeed';
    debugger;
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,1).subscribe((res:any)=>{
      this.noteLedgerA= res as any[];
      this.noteNameA=this.noteLedgerA[0].noteName;
      this.noteTotalA=this.noteLedgerA[this.noteLedgerA.length-1].totalBalance;
    })
  }

  getAllNoteLedgerB(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,2).subscribe((res:any)=>{
      this.noteLedgerB= res as any[];
      this.noteNameB=this.noteLedgerB[0].noteName;
      this.noteTotalB=this.noteLedgerB[this.noteLedgerB.length-1].totalBalance;
    })
  }
  getAllNoteLedgerC(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,3).subscribe((res:any)=>{
      this.noteLedgerC= res as any[];
      this.noteNameC=this.noteLedgerC[0].noteName;
      this.noteTotalC=this.noteLedgerC[this.noteLedgerC.length-1].totalBalance;
    })
  }
  getAllNoteLedgerD(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,4).subscribe((res:any)=>{
      this.noteLedgerD= res as any[];
      this.noteNameD=this.noteLedgerD[0].noteName;
      this.noteTotalD=this.noteLedgerD[this.noteLedgerD.length-1].totalBalance;
    })
  }
  getAllNoteLedgerE(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,5).subscribe((res:any)=>{
      this.noteLedgerE= res as any[];
      this.noteNameE=this.noteLedgerE[0].noteName;
      this.noteTotalE=this.noteLedgerE[this.noteLedgerE.length-1].totalBalance;
    })
  }
  getAllNoteLedgerF(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,6).subscribe((res:any)=>{
      this.noteLedgerF= res as any[];
      this.noteNameF=this.noteLedgerF[0].noteName;
      this.noteTotalF=this.noteLedgerF[this.noteLedgerF.length-1].totalBalance;
    })
  }
  getAllNoteLedgerG(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,7).subscribe((res:any)=>{
      this.noteLedgerG= res as any[];
      this.noteNameG=this.noteLedgerG[0].noteName;
      this.noteTotalG=this.noteLedgerG[this.noteLedgerG.length-1].totalBalance;
    })
  }
  getAllNoteLedgerH(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,8).subscribe((res:any)=>{
      this.noteLedgerH= res as any[];
      this.noteNameH=this.noteLedgerH[0].noteName;
      this.noteTotalH=this.noteLedgerH[this.noteLedgerH.length-1].totalBalance;
    })
  }
  getAllNoteLedgerI(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,9).subscribe((res:any)=>{
      this.noteLedgerI= res as any[];
      this.noteNameI=this.noteLedgerI[0].noteName;
      this.noteTotalI=this.noteLedgerI[this.noteLedgerI.length-1].totalBalance;
    })
  }
  getAllNoteLedgerJ(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,10).subscribe((res:any)=>{
      this.noteLedgerJ= res as any[];
      this.noteNameJ=this.noteLedgerJ[0].noteName;
      this.noteTotalJ=this.noteLedgerJ[this.noteLedgerJ.length-1].totalBalance;
    })
  }
  getAllNoteLedgerK(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,11).subscribe((res:any)=>{
      this.noteLedgerK= res as any[];
      this.noteNameK=this.noteLedgerK[0].noteName;
      this.noteTotalK=this.noteLedgerK[this.noteLedgerK.length-1].totalBalance;
    })
  }
  getAllNoteLedgerL(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,12).subscribe((res:any)=>{
      this.noteLedgerL= res as any[];
      this.noteNameL=this.noteLedgerL[0].noteName;
      this.noteTotalL=this.noteLedgerL[this.noteLedgerL.length-1].totalBalance;
    })
  }

  getAllNoteLedgerM(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,13).subscribe((res:any)=>{
      this.noteLedgerM= res as any[];
      this.noteNameM=this.noteLedgerM[0].noteName;
      this.noteTotalM=this.noteLedgerM[this.noteLedgerM.length-1].totalBalance;
    })
  }
  getAllNoteLedgerN(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,14).subscribe((res:any)=>{
      this.noteLedgerN= res as any[];
      this.noteNameN=this.noteLedgerN[0].noteName;
      this.noteTotalN=this.noteLedgerN[this.noteLedgerN.length-1].totalBalance;
    })
  }
  getAllNoteLedgerO(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,15).subscribe((res:any)=>{
      this.noteLedgerO= res as any[];
      this.noteNameO=this.noteLedgerO[0].noteName;
      this.noteTotalO=this.noteLedgerO[this.noteLedgerO.length-1].totalBalance;
    })
  }
  getAllNoteLedgerP(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,16).subscribe((res:any)=>{
      this.noteLedgerP= res as any[];
      this.noteNameP=this.noteLedgerP[0].noteName;
      this.noteTotalP=this.noteLedgerP[this.noteLedgerP.length-1].totalBalance;
    })
  }
  getAllNoteLedgerQ(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,17).subscribe((res:any)=>{
      this.noteLedgerQ= res as any[];
      this.noteNameQ=this.noteLedgerQ[0].noteName;
      this.noteTotalQ=this.noteLedgerQ[this.noteLedgerQ.length-1].totalBalance;
    })
  }
  getAllNoteLedgerR(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,18).subscribe((res:any)=>{
      this.noteLedgerR= res as any[];
      this.noteNameR=this.noteLedgerR[0].noteName;
      this.noteTotalR=this.noteLedgerR[this.noteLedgerR.length-1].totalBalance;
    })
  }
  getAllNoteLedgerS(){
    let datePipeString='NoNeed';
    this._noteService.getAllNoteLedger(datePipeString,this.compDate,20).subscribe((res:any)=>{
      this.noteLedgerS= res as any[];
      this.noteNameS=this.noteLedgerS[0].noteName;
      this.noteTotalS=this.noteLedgerS[this.noteLedgerS.length-1].totalBalance;
    })
  }
}

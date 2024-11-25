import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';
import { TrialBalanceViewModel } from 'src/app/models/Note/TrialBalanceViewModel';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import BigNumber from 'bignumber.js';

// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { CellConfig, jsPDF } from 'jspdf';
// declare var jsPDF: any;

@Component({
  selector: 'app-trial-balance-all',
  templateUrl: './trial-balance-all.component.html',
  styleUrls: ['./trial-balance-all.component.scss']
})
export class TrialBalanceAllComponent {
  
  public trialBalance:TrialBalanceViewModel[]=[];
  public searchText:any;
  public title:boolean=false;
  public titleOpening:boolean=false;
  public titleCurrent:boolean=false;
  public download:boolean=false;

  public totalOpeningDebit:number;
  public totalOpeningCredit:number;
  public totalCurrentDebit:number;
  public totalCurrentCredit:number;
  public totalClosingDebit:number;
  public totalClosingCredit:number;
  public listFiscalYear:any[];
  public activeYear:any;
  public startDate:any;
  public endDate:any;
  public listOfAccLedgers:any[]=[];
  public listOfAccLedgersCurrent:any[]=[];

  public tOpDbt:BigNumber=new BigNumber(0);
  public tOpDbt2:BigNumber;
  public tOpDbt3:BigNumber;

  public tOpCdt:BigNumber=new BigNumber(0);
  public tOpCdt2:BigNumber;
  public tOpCdt3:BigNumber;

  public tCurrDbt:BigNumber=new BigNumber(0);
  public tCurrDbt2:BigNumber;
  public tCurrDbt3:BigNumber;

  public tCurrCdt:BigNumber=new BigNumber(0);
  public tCurrCdt2:BigNumber;
  public tCurrCdt3:BigNumber;

  public tCloDbt:BigNumber=new BigNumber(0);
  public tCloDbt2:BigNumber;
  public tCloDbt3:BigNumber;

  public tCloCdt:BigNumber=new BigNumber(0);
  public tCloCdt2:BigNumber;
  public tCloCdt3:BigNumber;
  
  

  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _entryService: EntryService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ){
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    this.endDate = _datePipe.transform(lastDay,'yyyy-MM-dd');
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    this.startDate = _datePipe.transform(firstDayOfMonth,'yyyy-MM-dd');
    //this.endDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
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
      //this.startDate = this._datePipe.transform(this.activeYear.startMonthName,'yyyy-MM-dd');
    })
  }

  getTrailBalance(start:any, end:any){
    this.title=true;
      this.tOpDbt= new BigNumber(0);
      this.tOpCdt= new BigNumber(0);
      this.tCurrDbt= new BigNumber(0);
      this.tCurrCdt= new BigNumber(0);
      this.tCloDbt= new BigNumber(0);
      this.tCloCdt= new BigNumber(0);
    
      this._noteService.getTrialBalanceSheet(start,end).subscribe((res :any)=>{
      this.trialBalance=res as TrialBalanceViewModel[];
      let i=0;
      for(i=0;i<this.trialBalance.length;i++)
      {
        this.tOpDbt= new BigNumber(this.tOpDbt);
        this.tOpDbt2= new BigNumber(this.trialBalance[i].openingDebit);
        this.tOpDbt3=this.tOpDbt.plus(this.tOpDbt2);
        this.tOpDbt=this.tOpDbt3;

        this.tOpCdt= new BigNumber(this.tOpCdt);
        this.tOpCdt2= new BigNumber(this.trialBalance[i].openingCredit);
        this.tOpCdt3=this.tOpCdt.plus(this.tOpCdt2);
        this.tOpCdt=this.tOpCdt3;

        this.tCurrDbt= new BigNumber(this.tCurrDbt);
        this.tCurrDbt2= new BigNumber(this.trialBalance[i].currentDebit);
        this.tCurrDbt3=this.tCurrDbt.plus(this.tCurrDbt2);
        this.tCurrDbt=this.tCurrDbt3;

        this.tCurrCdt= new BigNumber(this.tCurrCdt);
        this.tCurrCdt2= new BigNumber(this.trialBalance[i].currentCredit);
        this.tCurrCdt3=this.tCurrCdt.plus(this.tCurrCdt2);
        this.tCurrCdt=this.tCurrCdt3;

        this.tCloDbt= new BigNumber(this.tCloDbt);
        this.tCloDbt2= new BigNumber(this.trialBalance[i].closingDebit);
        this.tCloDbt3=this.tCloDbt.plus(this.tCloDbt2);
        this.tCloDbt=this.tCloDbt3;


        this.tCloCdt= new BigNumber(this.tCloCdt);
        this.tCloCdt2= new BigNumber(this.trialBalance[i].closingCredit);
        this.tCloCdt3=this.tCloCdt.plus(this.tCloCdt2);
        this.tCloCdt=this.tCloCdt3;

      }

      let numbft= this.tOpDbt3.toString();
      this.totalOpeningDebit=parseFloat(numbft);

      let numft1=this.tOpCdt3.toString();
      this.totalOpeningCredit=parseFloat(numft1);
      
      let numft2=this.tCurrDbt3.toString();
      this.totalCurrentDebit=parseFloat(numft2);

      let numft3=this.tCurrCdt3.toString();
      this.totalCurrentCredit=parseFloat(numft3);

      let numft4=this.tCloDbt3.toString();
      this.totalClosingDebit=parseFloat(numft4);
 
      let numft5=this.tCloCdt3.toString();
      this.totalClosingCredit=parseFloat(numft5);
      this.title=false;
     })
  }

  getLedgerCodeForOpening(code:any){
    this.titleOpening=true;
    let startte='Rakib';
    this.listOfAccLedgers.length=0;
    this._entryService.getAccLedgerByCode(code,this.startDate,startte).subscribe((res:any)=>{
      this.listOfAccLedgers=res as any[];
      this.titleOpening=false;
    })
  }

  getLedgerCodeForCurrent(code:any){
    this.titleCurrent=true;
    this.listOfAccLedgersCurrent.length=0;
    this._entryService.getAccLedgerByCode(code,this.startDate,this.endDate).subscribe((res:any)=>{
      this.listOfAccLedgersCurrent=res as any[];
      this.titleCurrent=false;
    })
  }
  
  invoicegnrt(start:any, end:any){
    this.download=true;
    this._noteService.getReportforAll(start,end).subscribe(res=>{
     let blob:Blob=res.body as Blob;
     let url=window.URL.createObjectURL(blob);
     window.open(url); 
     this.download=false;
   })
 }

  //  precisionRoundMod(number: number,precision: any) {
  //   var factor = Math.pow(10, precision);
  //   var n = precision < 0 ? number : 0.01 / factor + number;
  //   return Math.round( n * factor) / factor;
  // }



  // public openPDF(): void {
  //   let DATA: any = document.getElementById('ddll');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 4, position, fileWidth, fileHeight);
  //     PDF.save('angular.pdf');
  //   });
  // }


//   htmlToPdf() {
//     const doc = new jsPDF();
//     const ta = document.getElementById('ddll');
//     doc.fromHTML(ta, 0, 0);
//     doc.save('demo.pdf')
// }


// exportDataToPDF() {
//   // Creating a unique file name for my PDF
//   const fileName = this.title.replace('', '_') + '_' + Math.floor((Math.random() * 1000000) + 1) + '.pdf';
//   // Default export is a4 paper, portrait, using millimeters for units
//   const doc = new jsPDF();
//   doc.setFontSize(21);
//   doc.setFont('helvetica', 'bold');
//   const titleXPos = (doc.internal.pageSize.getWidth() / 2) - (doc.getTextWidth(this.title) / 3);
//   doc.text(this.title, titleXPos, 5);
//   doc.setFont('helvetica', 'normal');
//   doc.setFontSize(10);
//   doc.table(2, 45, this._getDataForPdfTable(), this._createHeadersForPdfTable([
//      'minorCategoryCode','minorCategoryName','openingCredit','openingDebit','currentCredit', 'currentDebit' ,'closingCredit', 'closingDebit'
//     //  'Code','Name','Opening Dr','Opening Cr','Current Dr', 'Current Cr' ,'Closing Dr', 'Closing Cr'
//   ]), { autoSize: false });
//   doc.save(fileName);
// }

// private _createHeadersForPdfTable(keys: string[]) {
//   const result: CellConfig[] = [];
//   for (let i = 0; i < keys.length; i += 1) {
//     result.push({
//       name: keys[i],
//       prompt: keys[i],
//       width: 34,
//       align: 'center',
//       padding: 2
//     });
//   }
//   return result;
// }
// private _getDataForPdfTable() {
//   debugger;
//   const data = [];
//   for (let i = 0; i < this.trialBalance.length; i++) {
//     data.push({
//       minorCategoryCode: this.trialBalance[i].minorCategoryCode,
//       minorCategoryName: this.trialBalance[i].minorCategoryName,
//       openingCredit: this.trialBalance[i].openingCredit,
//       openingDebit: this.trialBalance[i].openingDebit,
//       currentCredit: this.trialBalance[i].currentCredit,
//       currentDebit: this.trialBalance[i].currentDebit,
//       closingCredit: this.trialBalance[i].closingCredit,
//       closingDebit: this.trialBalance[i].closingDebit,
//     });
//   }
//   return data;
// }

  
}

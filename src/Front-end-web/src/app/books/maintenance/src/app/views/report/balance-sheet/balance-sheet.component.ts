import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Console } from 'console';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';
import { BalanceSheetViewModelReport } from 'src/app/models/Note/BalanceSheetViewModelReport';
import { PartyService } from 'src/app/services/Party/party.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.scss']
})
export class BalanceSheetComponent {


  public balanceSheet1: any[]=[];
  public balanceSheet2: any[]=[];
  public balanceSheet3: any[]=[];
  public balanceSheet5: any[]=[];
  public balanceSheet6: any[]=[];

  public balanceSheet7: any[]=[];
  public balanceSheet8: any[]=[];
  public balanceSheet9: any[]=[];
  public balanceSheet10: any[]=[];
  public balanceSheet11: any[]=[];
  

  public totalBalance1:any;
  public totalBalance2:any;
  public totalBalance3:any;
  public totalBalance5:any;
  public totalBalance6:any;

  public totalBalance7:any;
  public totalBalance8:any;
  public totalBalance9:any;
  public totalBalance10:any;
  public totalBalance11:any;

  public headName1:any;
  public headName2:any;
  public headName3:any;
 
  public headName5:any;
  public headName6:any;
  public datePipeString:any;
  public secoundDate:any;
  public open:boolean=false;
  public noteDetails:any[];


  public allBalansheet1:any[]=[];
  public type:any;
  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];

  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _partyService: PartyService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.secoundDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getBalanceSheet1();
    this.getBalanceSheet2();
    this.getBalanceSheetForEquity();
    this.getBalanceSheet5();
    this.getBalanceSheet6();
    
  }
  
  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  getNoteDetails(id:any){
    this._noteService.getAllNoteDetail(id,this.datePipeString).subscribe((res:any)=>{
      this.noteDetails=res as any[];
    })
  }

  
  getNoteDetailSecond(id:any){
    this._noteService.getAllNoteDetail(id,this.secoundDate).subscribe((res:any)=>{
      this.noteDetails=res as any[];
    })
  }

  getByDate(){
    this.getBalanceSheet1();
    this.getBalanceSheet2();
    this.getBalanceSheetForEquity();
    this.getBalanceSheet5();
    this.getBalanceSheet6();
  }
  getByDateSecond(){
    this.open=true;
    this.getBalanceSheet7();
    this.getBalanceSheet8();
    this.getBalanceSheetForEquity1();
    this.getBalanceSheet9();
    this.getBalanceSheet10();
  }

  getBalanceSheet1(){
    let id=2;
    this._noteService.getBalanceSheet(id,this.datePipeString).subscribe((res:any)=>{
      this.balanceSheet1= res as any [];

       let last= this.balanceSheet1[this.balanceSheet1.length-1]
       this.totalBalance1=last.totalAmount;
       this.headName1=last.accSubHeadName;
    })
    
  }
  getBalanceSheet2(){
    let id=1;
    this._noteService.getBalanceSheet(id,this.datePipeString).subscribe((res:any)=>{
      this.balanceSheet2= res as any [];
      

       let last= this.balanceSheet2[this.balanceSheet2.length-1]
       this.totalBalance2=last.totalAmount;
       this.headName2=last.accSubHeadName;
       
    })
    
  }

  getBalanceSheetForEquity(){
    let accHeadId=3;
    this._noteService.getBalanceSheetForEquity(accHeadId,this.datePipeString).subscribe((res:any)=>{
      this.balanceSheet3= res as any [];
      

      let last= this.balanceSheet3[this.balanceSheet3.length-1]
       this.totalBalance3=last.totalAmount;
       this.headName3=last.accSubHeadName;
      
    })
  }

  
  getBalanceSheet5(){
    let id=4;
    this._noteService.getBalanceSheet(id,this.datePipeString).subscribe((res:any)=>{
      this.balanceSheet5= res as any [];
    

      let last= this.balanceSheet5[this.balanceSheet5.length-1]
       this.totalBalance5=last.totalAmount;
       this.headName5=last.accSubHeadName;
      
    })
    
  }
  getBalanceSheet6(){
    let id=3;
    this._noteService.getBalanceSheet(id,this.datePipeString).subscribe((res:any)=>{
      this.balanceSheet6= res as any [];
      

      let last= this.balanceSheet6[this.balanceSheet6.length-1]
       this.totalBalance6=last.totalAmount;
       this.headName6=last.accSubHeadName;
       
    })
    
  }


  getBalanceSheet7(){
    let id=2;
    console.log(this.datePipeString,"this.datePipeString");
    this._noteService.getBalanceSheet(id,this.secoundDate).subscribe((res:any)=>{
      this.balanceSheet7= res as any [];

       let last= this.balanceSheet7[this.balanceSheet7.length-1]
       this.totalBalance7=last.totalAmount;
      //  this.headName1=last.accSubHeadName;
    })
    
  }
  getBalanceSheet8(){
    let id=1;
    this._noteService.getBalanceSheet(id,this.secoundDate).subscribe((res:any)=>{
      this.balanceSheet8= res as any [];
      

       let last= this.balanceSheet8[this.balanceSheet8.length-1]
       this.totalBalance8=last.totalAmount;
      //  this.headName2=last.accSubHeadName;
       
    })
    
  }

  getBalanceSheetForEquity1(){
    let accHeadId=3;
    this._noteService.getBalanceSheetForEquity(accHeadId,this.secoundDate).subscribe((res:any)=>{
      this.balanceSheet11= res as any [];
      

      let last= this.balanceSheet11[this.balanceSheet11.length-1]
       this.totalBalance11=last.totalAmount;
      //  this.headName3=last.accSubHeadName;
      
    })
  }

  getBalanceSheet9(){
    let id=4;
    this._noteService.getBalanceSheet(id,this.secoundDate).subscribe((res:any)=>{
      this.balanceSheet9= res as any [];
    

      let last= this.balanceSheet9[this.balanceSheet9.length-1]
       this.totalBalance9=last.totalAmount;
      //  this.headName5=last.accSubHeadName;
      
    })
    
  }
  getBalanceSheet10(){
    let id=3;
    this._noteService.getBalanceSheet(id,this.secoundDate).subscribe((res:any)=>{
      this.balanceSheet10= res as any [];
      

      let last= this.balanceSheet10[this.balanceSheet10.length-1]
       this.totalBalance10=last.totalAmount;
      //  this.headName6=last.accSubHeadName;
       
    })
    
  }

  getReport(){

    if(this.open)
    {

    this.allBalansheet1.splice(0, this.allBalansheet1.length);

    let bsr= new BalanceSheetViewModelReport();
    bsr.createdDate=this.datePipeString;
    bsr.currentAsset=Number(this.totalBalance2);
    bsr.nonCurrentAsset=Number(this.totalBalance1);
    bsr.totalAsset=Number(this.totalBalance1+this.totalBalance2);
    bsr.equity=Number(this.totalBalance3);
    bsr.nonCurrentLiability=Number(this.totalBalance5);
    bsr.currentLiability=Number(this.totalBalance6);
    bsr.totalLiability=Number(this.totalBalance3+this.totalBalance5+this.totalBalance6);
    bsr.type=this.type;

    this.allBalansheet1.push(bsr);

    let bsr1= new BalanceSheetViewModelReport();
    bsr1.createdDate=this.secoundDate;
    bsr1.currentAsset=Number(this.totalBalance8);
    bsr1.nonCurrentAsset=Number(this.totalBalance7);
    bsr1.totalAsset=Number(this.totalBalance7+this.totalBalance8);
    bsr1.equity=Number(this.totalBalance11);
    bsr1.nonCurrentLiability=Number(this.totalBalance9);
    bsr1.currentLiability=Number(this.totalBalance10);
    bsr1.totalLiability=Number(this.totalBalance11+this.totalBalance9+this.totalBalance10);
    bsr1.type=this.type;

    this.allBalansheet1.push(bsr1);

    this._partyService.getBalanceSheetReport(this.allBalansheet1).subscribe((res:any)=>{

      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
    })

    
    }

    else
    {
    this.allBalansheet1.splice(0, this.allBalansheet1.length);

    let bsr= new BalanceSheetViewModelReport();
    bsr.createdDate=this.datePipeString;
    bsr.currentAsset=Number(this.totalBalance2);
    bsr.nonCurrentAsset=Number(this.totalBalance1);
    bsr.totalAsset=Number(this.totalBalance1+this.totalBalance2);
    bsr.equity=Number(this.totalBalance3);
    bsr.nonCurrentLiability=Number(this.totalBalance5);
    bsr.currentLiability=Number(this.totalBalance6);
    bsr.totalLiability=Number(this.totalBalance3+this.totalBalance5+this.totalBalance6);
    bsr.type=this.type;
    this.allBalansheet1.push(bsr);
    this._partyService.getBalanceSheetReport(this.allBalansheet1).subscribe((res:any)=>{

      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
    })
    }


  }


}

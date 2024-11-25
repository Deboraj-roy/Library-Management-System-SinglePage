//Must Read: Here Comprehensive is actually Income Tax Payable, and IncomeTax is actually Comprehensive
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';
import { BalanceSheetViewModel } from 'src/app/models/Note/BalanceSheetViewModel';
import { ProfitOrLossReportViewModel } from 'src/app/models/reporting/ProfitOrLossReportViewModel';
import { DatePipe, DecimalPipe } from '@angular/common';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';

@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss']
})
export class ProfitLossComponent {

  
  public balanceSheet:BalanceSheetViewModel= new BalanceSheetViewModel();
  public balanceSheetForLedger:BalanceSheetViewModel= new BalanceSheetViewModel();
  public materialCost:BalanceSheetViewModel= new BalanceSheetViewModel();
  public directExpences:BalanceSheetViewModel= new BalanceSheetViewModel();

  public AdministrativeExpences:BalanceSheetViewModel= new BalanceSheetViewModel();
  public MarketingExpences:BalanceSheetViewModel= new BalanceSheetViewModel();
  public SellingExpences:BalanceSheetViewModel= new BalanceSheetViewModel();
  public DistributionExpences:BalanceSheetViewModel= new BalanceSheetViewModel();

  public FinancialExpences:BalanceSheetViewModel= new BalanceSheetViewModel();
  public IncomeTax:BalanceSheetViewModel= new BalanceSheetViewModel();
  public Comprehensive:BalanceSheetViewModel= new BalanceSheetViewModel();

  public grossTotal:number=0;
  public OperatingTotal:number=0;
  public open:boolean=false;
  public startDate:string;
  public startCompairDate:string;
  public endDate:string;
  public endCompairDate:string;
  public endstartDate:any;
  public bal:number=0;


  public balanceSheet1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public balanceSheetForLedger1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public materialCost1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public directExpences1:BalanceSheetViewModel= new BalanceSheetViewModel();

  public AdministrativeExpences1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public MarketingExpences1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public SellingExpences1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public DistributionExpences1:BalanceSheetViewModel= new BalanceSheetViewModel();

  public FinancialExpences1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public IncomeTax1:BalanceSheetViewModel= new BalanceSheetViewModel();
  public Comprehensive1:BalanceSheetViewModel= new BalanceSheetViewModel();

  public grossTotal1:number=0;
  public OperatingTotal1:number=0;
  public open1:boolean=false;
  public listFiscalYear:any[];
  public noteDetails:any[];
  public activeYear:any;


  public type:any;
  public firstReport:boolean;
  public listOfRepoer:ProfitOrLossReportViewModel[]=[];

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];
  
  
  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _datePipe: DatePipe,
    private _entryService: EntryService,
    private _partyService: PartyService,
    private decimalPipe: DecimalPipe
  ) {
    this.endDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.endCompairDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getFiscalYear();
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  getFirstStatement(){
    this.firstReport=false;
    this.open=true;
    this.grossTotal=0;
    this.OperatingTotal=0;
    this.getProfitLossStatement();
    this.getProfitLossByLedger();
    this.getProfitLossFormaterialCost();
    this.getProfitLossFordirectExpences();
    this.getProfitLossForAdministrativeExpences();
    this.getProfitLossForMarketingExpences();
    this.getProfitLossForSellingExpences();
    this.getProfitLossForDistributionExpences();
    this.getProfitLossForFinancialExpences();
    this.getProfitLossForIncomeTax();
    this.getProfitLossForComprehensive();
  }

  getFiscalYear(){
    this._entryService.getFiscalYear().subscribe((res:any)=>{
      this.listFiscalYear= res as any [];
      this.activeYear=this.listFiscalYear.find(p => p.status==1);
      this.startDate = this._datePipe.transform(this.activeYear.startMonthName,'yyyy-MM-dd');
      this.startCompairDate = this._datePipe.transform(this.activeYear.startMonthName,'yyyy-MM-dd');
    })
  }

  getNote(id:any){
   this._noteService.getAllNoteDetail(id.noteId,this.endDate).subscribe((res:any)=>{
    this.noteDetails=res as any[];
   })
  }

  getNoteById(id){
    this._noteService.getAllNoteDetail(id.noteId,this.endCompairDate).subscribe((res:any)=>{
      this.noteDetails=res as any[];
     })
  }

  getAllLedgerByLedgerCode(id:any){
    if(id==1){
      this._noteService.getAllLedgerByLedgerCode(this.startDate,this.endDate,'29600').subscribe((res:any)=>{
        this.noteDetails= res as any[];
       })
    }
    else{
      this._noteService.getAllLedgerByLedgerCode(this.startDate,this.endDate,'51900').subscribe((res:any)=>{
        this.noteDetails= res as any[];
      })
    }    
  }

  getAllLedgerByCode(id:any){
    if(id==1){
      this._noteService.getAllLedgerByLedgerCode(this.startCompairDate,this.endCompairDate,'29600').subscribe((res:any)=>{
        this.noteDetails= res as any[];
       })
    }
    else{
      this._noteService.getAllLedgerByLedgerCode(this.startCompairDate,this.endCompairDate,'51900').subscribe((res:any)=>{
        this.noteDetails= res as any[];
      })
    }    
  }
   getProfitLossStatement(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,21).subscribe((res:any)=>{
      this.balanceSheet=res as BalanceSheetViewModel;
      this.grossTotal=this.grossTotal+this.balanceSheet.balance;
    })
  }
  getProfitLossFormaterialCost(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,22).subscribe((res:any)=>{
      this.materialCost=res as BalanceSheetViewModel;
      this.grossTotal=this.grossTotal-this.materialCost.balance;
    })
  }


  getProfitLossFordirectExpences(){
    // this._noteService.getProfitLossStatement(this.startDate,this.endDate,23).subscribe((res:any)=>{
    //   this.directExpences=res as BalanceSheetViewModel;
    //   this.grossTotal=this.grossTotal-this.directExpences.balance;
    // })
    this._noteService.getCostOfSales(this.startDate,this.endDate,23).subscribe((res:any)=>{
      this.directExpences=res as BalanceSheetViewModel;
      this.grossTotal=this.grossTotal-this.directExpences.balance;
     })

  }
  getProfitLossByLedger(){
    this._noteService.getProfitLossByLedger(this.startDate,this.endDate,'29600').subscribe((res:any)=>{
      this.balanceSheetForLedger = res as BalanceSheetViewModel;
      this.grossTotal=this.grossTotal-this.balanceSheetForLedger.balance;
    })
  }

  getProfitLossForAdministrativeExpences(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,24).subscribe((res:any)=>{
      this.AdministrativeExpences=res as BalanceSheetViewModel;
      this.OperatingTotal=this.OperatingTotal+this.AdministrativeExpences.balance;
    })
  }
  getProfitLossForMarketingExpences(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,25).subscribe((res:any)=>{
      this.MarketingExpences=res as BalanceSheetViewModel;
      this.OperatingTotal=this.OperatingTotal+this.MarketingExpences.balance;
    })
  }
  getProfitLossForSellingExpences(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,26).subscribe((res:any)=>{
      this.SellingExpences=res as BalanceSheetViewModel;
      this.OperatingTotal=this.OperatingTotal+this.SellingExpences.balance;
    })
  }
  getProfitLossForDistributionExpences(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,27).subscribe((res:any)=>{
      this.DistributionExpences=res as BalanceSheetViewModel;
      this.OperatingTotal=this.OperatingTotal+this.DistributionExpences.balance;
    })
  }

  getProfitLossForFinancialExpences(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,28).subscribe((res:any)=>{
      this.FinancialExpences=res as BalanceSheetViewModel;
    })
  }

  getProfitLossForIncomeTax(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,29).subscribe((res:any)=>{
      this.IncomeTax=res as BalanceSheetViewModel;
    })
  }
  getProfitLossForComprehensive(){
    this._noteService.getProfitLossStatement(this.startDate,this.endDate,30).subscribe((res:any)=>{
      this.Comprehensive=res as BalanceSheetViewModel;
      
    })
  }



///2nd statement



  getSecondStatement(){
    this.firstReport=true;
    this.open1=true;
    this.grossTotal1=0;
    this.OperatingTotal1=0;
    this.getProfitLossStatement1();
    this.getProfitLossByLedger1();
    this.getProfitLossFormaterialCost1(); 
    this.getProfitLossFordirectExpences1();
    this.getProfitLossForAdministrativeExpences1();
    this.getProfitLossForMarketingExpences1();
    this.getProfitLossForSellingExpences1();
    this.getProfitLossForDistributionExpences1();
    this.getProfitLossForFinancialExpences1();
    this.getProfitLossForIncomeTax1();
    this.getProfitLossForComprehensive1();
 }



 getProfitLossStatement1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,21).subscribe((res:any)=>{
    this.balanceSheet1=res as BalanceSheetViewModel;
    this.grossTotal1=this.grossTotal1+this.balanceSheet1.balance;
  })
}
getProfitLossFormaterialCost1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,22).subscribe((res:any)=>{
    this.materialCost1=res as BalanceSheetViewModel;
    this.grossTotal1=this.grossTotal1-this.materialCost1.balance;
  })
}
// directExpences
getProfitLossFordirectExpences1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,23).subscribe((res:any)=>{
    this.directExpences1=res as BalanceSheetViewModel;
    this.grossTotal1=this.grossTotal1-this.directExpences1.balance;
  })
}
getProfitLossByLedger1(){
  this._noteService.getProfitLossByLedger(this.startDate,this.endDate,'29600').subscribe((res:any)=>{
    this.balanceSheetForLedger1 = res as BalanceSheetViewModel;
    this.grossTotal1=this.grossTotal1-this.balanceSheetForLedger1.balance;
  })
}

getProfitLossForAdministrativeExpences1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,24).subscribe((res:any)=>{
    this.AdministrativeExpences1=res as BalanceSheetViewModel;
    this.OperatingTotal1=this.OperatingTotal1+this.AdministrativeExpences1.balance;
  })
}
getProfitLossForMarketingExpences1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,25).subscribe((res:any)=>{
    this.MarketingExpences1=res as BalanceSheetViewModel;
    this.OperatingTotal1=this.OperatingTotal1+this.MarketingExpences1.balance;
  })
}
getProfitLossForSellingExpences1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,26).subscribe((res:any)=>{
    this.SellingExpences1=res as BalanceSheetViewModel;
    this.OperatingTotal1=this.OperatingTotal1+this.SellingExpences1.balance;
  })
}
getProfitLossForDistributionExpences1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,27).subscribe((res:any)=>{
    this.DistributionExpences1=res as BalanceSheetViewModel;
    this.OperatingTotal1=this.OperatingTotal1+this.DistributionExpences1.balance;
  })
}

getProfitLossForFinancialExpences1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,28).subscribe((res:any)=>{
    this.FinancialExpences1=res as BalanceSheetViewModel;
  })
}

getProfitLossForIncomeTax1(){
  this._noteService.getProfitLossStatement(this.startCompairDate,this.endCompairDate,29).subscribe((res:any)=>{
    this.IncomeTax1=res as BalanceSheetViewModel;
  })
}
getProfitLossForComprehensive1(){
  this._noteService.getProfitLossStatement(this.startDate,this.endDate,30).subscribe((res:any)=>{
    this.Comprehensive1=res as BalanceSheetViewModel;
  })
}




getReport(){
  if(this.firstReport){

    this.listOfRepoer.splice(0, this.listOfRepoer.length);

    let rpt=new ProfitOrLossReportViewModel();
    rpt.revenue=this.balanceSheet.balance;
    rpt.vatTax=this.balanceSheetForLedger.balance;
    rpt.materialCost=this.materialCost.balance;
    rpt.directExpenses=this.directExpences.balance;
    rpt.grossProfit=this.grossTotal;
    rpt.administrativeExpenses=this.AdministrativeExpences.balance;
    rpt.marketingExpenses=this.MarketingExpences.balance;
    rpt.sellingExpenses=this.SellingExpences.balance;
    rpt.distributionExpenses=this.DistributionExpences.balance;
    rpt.operatingProfit=this.OperatingTotal;
    rpt.operatingGross=this.grossTotal-this.OperatingTotal;
    rpt.financialExpenses=this.FinancialExpences.balance;
    rpt.otherComprehensiveIncome=this.IncomeTax.balance;
    rpt.profitBeforeTax=this.grossTotal-this.OperatingTotal-this.FinancialExpences.balance+this.IncomeTax.balance;
    rpt.taxandVat=this.Comprehensive.balance;
    rpt.profitAfterTax=this.grossTotal-this.OperatingTotal-this.FinancialExpences.balance-this.Comprehensive.balance+this.IncomeTax.balance;
    rpt.total=this.grossTotal-this.OperatingTotal-this.FinancialExpences.balance-this.Comprehensive.balance+this.IncomeTax.balance;
    rpt.type=this.type;
    rpt.startDate=this.startDate;
    rpt.endDate=this.endDate;

    this.listOfRepoer.push(rpt);

    let rpt1=new ProfitOrLossReportViewModel();
    rpt1.revenue=this.balanceSheet1.balance;
    rpt1.vatTax=this.balanceSheetForLedger1.balance;
    rpt1.materialCost=this.materialCost1.balance;
    rpt1.directExpenses=this.directExpences1.balance;
    rpt1.grossProfit=this.grossTotal1;
    rpt1.administrativeExpenses=this.AdministrativeExpences1.balance;
    rpt1.marketingExpenses=this.MarketingExpences1.balance;
    rpt1.sellingExpenses=this.SellingExpences1.balance;
    rpt1.distributionExpenses=this.DistributionExpences1.balance;
    rpt1.operatingProfit=this.OperatingTotal1;
    rpt1.operatingGross=this.grossTotal1-this.OperatingTotal1;
    rpt1.financialExpenses=this.FinancialExpences1.balance;
    rpt1.otherComprehensiveIncome=this.IncomeTax1.balance;
    rpt1.profitBeforeTax=this.grossTotal1-this.OperatingTotal1-this.FinancialExpences1.balance+this.IncomeTax1.balance;
    rpt1.taxandVat=this.Comprehensive1.balance;
    rpt1.profitAfterTax=this.grossTotal1-this.OperatingTotal1-this.FinancialExpences1.balance-this.Comprehensive1.balance+this.IncomeTax1.balance;
    rpt1.total=this.grossTotal1-this.OperatingTotal1-this.FinancialExpences1.balance-this.Comprehensive1.balance+this.IncomeTax1.balance;
    rpt1.type=this.type;
    rpt1.startDate=this.startCompairDate;
    rpt1.endDate=this.endCompairDate;

    this.listOfRepoer.push(rpt1);

    this._partyService.getProfitOrLossReport(this.listOfRepoer).subscribe((res:any)=>{

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
    this.listOfRepoer.splice(0, this.listOfRepoer.length);
    let rpt=new ProfitOrLossReportViewModel();
    rpt.revenue=this.balanceSheet.balance;
    rpt.vatTax=this.balanceSheetForLedger.balance;
    rpt.materialCost=this.materialCost.balance;
    rpt.directExpenses=this.directExpences.balance;
    rpt.grossProfit=this.grossTotal;
    rpt.administrativeExpenses=this.AdministrativeExpences.balance;
    rpt.marketingExpenses=this.MarketingExpences.balance;
    rpt.sellingExpenses=this.SellingExpences.balance;
    rpt.distributionExpenses=this.DistributionExpences.balance;
    rpt.operatingProfit=this.OperatingTotal;
    rpt.operatingGross=this.grossTotal-this.OperatingTotal;
    rpt.financialExpenses=this.FinancialExpences.balance;
    rpt.otherComprehensiveIncome=this.IncomeTax.balance;
    rpt.profitBeforeTax=this.grossTotal-this.OperatingTotal-this.FinancialExpences.balance+this.IncomeTax.balance;
    rpt.taxandVat=this.Comprehensive.balance;
    rpt.profitAfterTax=this.grossTotal-this.OperatingTotal-this.FinancialExpences.balance-this.Comprehensive.balance+this.IncomeTax.balance;
    rpt.total=this.grossTotal-this.OperatingTotal-this.FinancialExpences.balance-this.Comprehensive.balance+this.IncomeTax.balance;
    rpt.type=this.type;
    rpt.startDate=this.startDate;
    rpt.endDate=this.endDate;

    this.listOfRepoer.push(rpt);


    this._partyService.getProfitOrLossReport(this.listOfRepoer).subscribe((res:any)=>{

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

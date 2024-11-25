import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';
import { OperatingCashFlowViewModel } from 'src/app/models/Note/OperatingCashFlowViewModel';
import { InvestingCashFlowViewModel } from 'src/app/models/Note/InvestingCashFlowViewModel';

@Component({
  selector: 'app-cash-flows',
  templateUrl: './cash-flows.component.html',
  styleUrls: ['./cash-flows.component.scss']
})
export class CashFlowsComponent {

  public startDate:any;
  public endDate:any;
  public strt:any;
  public endt:any;

  public cashGenerate:any;
  public receipt:any;
  public paidSupplire:any;
  public paidExpenses:any;

  public cashGenerate1:any;
  public receipt1:any;
  public paidSupplire1:any;
  public paidExpenses1:any;

  public investingActivites:any;
  public acquisitionOfFixedAssets:any;
  public paymentAgainstAdvance:any;
  public shortTermInvestment:any;

  public investingActivites1:any;
  public acquisitionOfFixedAssets1:any;
  public paymentAgainstAdvance1:any;
  public shortTermInvestment1:any;

  public operatingCashFlowViewModel:OperatingCashFlowViewModel;
  public investingCashFlow:InvestingCashFlowViewModel;
  public operatingCashFlowViewModel1:OperatingCashFlowViewModel;
  public investingCashFlow1:InvestingCashFlowViewModel;
  public finantialCashFlow:any;
  public cashAndCashEquvilentCashFlow:any;
  public finantialCashFlow1:any;
  public cashAndCashEquvilentCashFlow1:any;


  public firstOpen:boolean=false;
  public seconfOpen:boolean=false;

  constructor(
    private _toastr: ToastrService,
    private _noteService: NoteService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {
    this.startDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.endDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.strt = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.endt = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
   
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  getCashFlowChart(){
    this.firstOpen=true;
    this.getOperatincCashFromCashFlow();
    this.getInvestingCashFlow();
    this.getFinantialCashFlow();
    this.getOpeningBalanceForCashFromCashFlow();
  }

  getOperatincCashFromCashFlow(){
    this._noteService.getOperatincCashFromCashFlow(this.startDate,this.endDate).subscribe((res:any)=>{
      this.operatingCashFlowViewModel= res as OperatingCashFlowViewModel;
      this.cashGenerate=this.operatingCashFlowViewModel.cashGenerate; 
      this.receipt=this.operatingCashFlowViewModel.receipt; 
      this.paidSupplire=this.operatingCashFlowViewModel.paidSuplire; 
      this.paidExpenses=this.operatingCashFlowViewModel.paidExpences; 
      })
  }

  getInvestingCashFlow(){
    this._noteService.getInvestingCashFlow(this.startDate,this.endDate).subscribe((res:any)=>{
      this.investingCashFlow=res as InvestingCashFlowViewModel;
      this.investingActivites=this.investingCashFlow.investingActivites; 
      this.acquisitionOfFixedAssets=this.investingCashFlow.acquisitionOfFixedAssets; 
      this.paymentAgainstAdvance=this.investingCashFlow.paymentAgainstAdvance; 
      this.shortTermInvestment=this.investingCashFlow.shortTermInvestment; 
    })
  }

  getFinantialCashFlow(){
    this._noteService.getFinantialCashFromCashFlow(this.startDate,this.endDate).subscribe((res:any)=>{
     this.finantialCashFlow=res.data as any;
    })
  }

  getOpeningBalanceForCashFromCashFlow(){
    this._noteService.getOpeningBalanceForCashFromCashFlow(this.startDate,this.endDate).subscribe((res:any)=>{
      this.cashAndCashEquvilentCashFlow=res.data as any;
    })
  }


  getsecond(){
    if(this.firstOpen==true){
      this.seconfOpen=true;
    }
    else{
      this._toastr.info("Plesae Select First Two Date");
    }
   this.getOperatincCashFromCashFlow1();
   this.getInvestingCashFlow1();
   this.getFinantialCashFlow1();
   this.getOpeningBalanceForCashFromCashFlow1();
  }

  getOperatincCashFromCashFlow1(){
    this._noteService.getOperatincCashFromCashFlow(this.strt,this.endt).subscribe((res:any)=>{
      this.operatingCashFlowViewModel1= res as OperatingCashFlowViewModel;
      this.cashGenerate1=this.operatingCashFlowViewModel1.cashGenerate; 
      this.receipt1=this.operatingCashFlowViewModel1.receipt; 
      this.paidSupplire1=this.operatingCashFlowViewModel1.paidSuplire; 
      this.paidExpenses1=this.operatingCashFlowViewModel1.paidExpences; 
      })
  }

  getInvestingCashFlow1(){
    this._noteService.getInvestingCashFlow(this.strt,this.endt).subscribe((res:any)=>{
      this.investingCashFlow1=res as InvestingCashFlowViewModel;
      this.investingActivites1=this.investingCashFlow1.investingActivites; 
      this.acquisitionOfFixedAssets1=this.investingCashFlow1.acquisitionOfFixedAssets; 
      this.paymentAgainstAdvance1=this.investingCashFlow1.paymentAgainstAdvance; 
      this.shortTermInvestment1=this.investingCashFlow1.shortTermInvestment; 
    })
  }

  getFinantialCashFlow1(){
    this._noteService.getFinantialCashFromCashFlow(this.strt,this.endt).subscribe((res:any)=>{
     this.finantialCashFlow1=res.data as any;
    })
  }

  getOpeningBalanceForCashFromCashFlow1(){
    this._noteService.getOpeningBalanceForCashFromCashFlow(this.strt,this.endt).subscribe((res:any)=>{
      this.cashAndCashEquvilentCashFlow1=res.data as any;
    })
  }

  
}

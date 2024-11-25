import { DatePipe,DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartyService } from 'src/app/services/Party/party.service';

@Component({
  selector: 'app-daily-cash-bank',
  templateUrl: './daily-cash-bank.component.html',
  styleUrls: ['./daily-cash-bank.component.scss']
})
export class DailyCashBankComponent {

  public startDate:any;
  public listOfDailyBankCash:any[];
  public totalCashBalance:any=0;
  public totalBankBalance:any=0;
  public totalUnusableBalance:any=0;
  public totalUsableBalance:any=0;
  public totalBankTransactionToday:any=0;

  public type:any;

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];

  constructor(
    private _toastr: ToastrService,
    private _datePipe: DatePipe,
    private _partyService: PartyService,
    private decimalPipe: DecimalPipe,
  ) {
    this.startDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getCashBankBalance();
    }

    formatNumberWithCustomPattern(number: number): string {
      return this.decimalPipe.transform(number, '1.2-2');
    }
  
    getCashBankBalance(){
      this._partyService.getCashBankBalance(this.startDate).subscribe((res:any)=>{
        this.listOfDailyBankCash=res as any[];
        console.log(this.listOfDailyBankCash,"this.listOfDailyBankCash");
        
        this.totalCashBalance=0;
        this.totalBankBalance=0;
        this.totalUnusableBalance=0;
        this.totalUsableBalance=0;
        this.totalBankTransactionToday=0;

        for(let i=0;i<this.listOfDailyBankCash.length;i++){
          this.totalBankBalance=this.totalBankBalance+this.listOfDailyBankCash[i].openingBalance;
          if(this.listOfDailyBankCash[i].openingBalance > 100000){
            this.totalUsableBalance=this.totalUsableBalance+this.listOfDailyBankCash[i].openingBalance;
          }else{
            this.totalUnusableBalance=this.totalUnusableBalance+this.listOfDailyBankCash[i].openingBalance;
          }
          this.totalCashBalance=this.totalCashBalance+this.listOfDailyBankCash[i].cashBalance;
          this.totalBankTransactionToday=this.totalBankTransactionToday+this.listOfDailyBankCash[i].currentBalance;
        }
      })
    }

    getByDate(){
      this.getCashBankBalance();
    }

    getReport(){
     
      this._partyService.getDailyBankAndCashReport(this.type,this.startDate).subscribe((res:any)=>{

      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
      
      })
    }
}

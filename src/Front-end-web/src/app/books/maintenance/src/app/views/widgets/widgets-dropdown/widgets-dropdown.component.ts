import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { getStyle } from '@coreui/utils/src';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { DatePipe, DecimalPipe } from '@angular/common';
import { BalanceSheetViewModel } from 'src/app/models/Note/BalanceSheetViewModel';
import { NoteService } from 'src/app/services/Note/note.service';
import { PartyService } from 'src/app/services/Party/party.service';

@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsDropdownComponent implements OnInit, AfterContentInit {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private datePipe: DatePipe,
    private _noteService: NoteService,
    private _partyService: PartyService,
    private decimalPipe: DecimalPipe
  ) {}

  public balanceSheet:BalanceSheetViewModel= new BalanceSheetViewModel();
  public AdministrativeExpences:BalanceSheetViewModel= new BalanceSheetViewModel();
  public MarketingExpences:BalanceSheetViewModel= new BalanceSheetViewModel();
  operatingExpenses:number=0;
  public totalCashBalance:any=0;
  public totalBankBalance:any=0;
  public totalUnusableBalance:any=0;
  public totalUsableBalance:any=0;
  public totalBankTransactionToday:any=0;
  public listOfDailyBankCash:any[];
  todayDate:any;
  profitOrLoss:any;
  profitOrLossYearly:any;
  accountsReceivableBlc:any;
  LedgersWaitingForApproval:any;
  accountsPayableBlc:any;
  data: any[] = [];
  options: any[] = [];
  fiscalYearStartDate:any;
  totalIncome:any;
  totalIncomeMonth:any;
  totalExpensesMonth:any;
  totalExpensesYear:any;
  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April'
  ];
  datasets = [
    [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-primary'),
      pointHoverBorderColor: getStyle('--cui-primary'),
      data: [65, 59, 84, 84, 51, 55, 40]
    }], [{
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-info'),
      pointHoverBorderColor: getStyle('--cui-info'),
      data: [1, 18, 9, 17, 34, 22, 11]
    }], [{
      label: 'My Third dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-warning'),
      pointHoverBorderColor: getStyle('--cui-warning'),
      data: [78, 81, 80, 45, 34, 12, 40],
      fill: true
    }], [{
      label: 'My Fourth dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
      barPercentage: 0.7
    }]
  ];
  optionsDefault = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };

  ngOnInit(): void {
    this.setData();
    this.getStartDate();
    this.getYearlyProfitOrLoss();
    this.get_AR_AP_Balance();
    this.getDailyExpenseRevenue();
    this.getCashBankBalance();
    this.get_LedgersWaitingForApproval();
  }
  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }
  
  getCashBankBalance(){
    const startDate = new Date(); // current date and time
    this._partyService.getCashBankBalance(startDate.toISOString()).subscribe((res:any)=>{
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

  
  getStartDate(){
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    let newDate= this.convertStringToDate(this.todayDate);
    newDate.setDate(1);
    let startDate= this.datePipe.transform(newDate, 'yyyy-MM-dd');

  //  this._noteService.getProfitOrLoss(startDate,this.todayDate).subscribe((res:any)=>{
  //   this.profitOrLoss=res as any;
  //  })
  this._noteService.getProfitOrLossMonthly(startDate,this.todayDate).subscribe((res:any)=>{
    this.profitOrLoss=res as any;
   })
   let id=4;
      this._noteService.getHeadBalanceByAccHeadId(id,startDate,this.todayDate).subscribe((res:any)=>{
      this.totalIncomeMonth=res.data as any;
    })

    let id1=5;
      this._noteService.getHeadBalanceByAccHeadId(id1,startDate,this.todayDate).subscribe((res:any)=>{
      this.totalExpensesMonth=res.data as any;
    })
   
  }

  getYearlyProfitOrLoss(){
    this._noteService.getFiscalYearStartDate().subscribe((res:any)=>{
      let startDate= res.data as any;
      this.fiscalYearStartDate= this.datePipe.transform(startDate, 'yyyy-MM-dd');
      this._noteService.getProfitOrLoss(this.fiscalYearStartDate,this.todayDate).subscribe((res:any)=>{
        this.profitOrLossYearly=res   as any;
       })
      let id=4;
      this._noteService.getHeadBalanceByAccHeadId(id,this.fiscalYearStartDate,this.todayDate).subscribe((res:any)=>{
      this.totalIncome=res.data as any;
      })
      let id1=5;
      this._noteService.getHeadBalanceByAccHeadId(id1,this.fiscalYearStartDate,this.todayDate).subscribe((res:any)=>{
      this.totalExpensesYear=res.data as any;
      })
    })
  }

  get_AR_AP_Balance(){
    this._noteService.get_AR_AP_Balance(this.todayDate).subscribe((res:any)=>{
     // debugger;
      for(let i=0; i<res.length; i++){
          if(res[i].noteId == 7){
            
      this.accountsReceivableBlc= res[i].balance as any;
          }else if(res[i].noteId == 15){
            
      this.accountsPayableBlc=res[i].balance   as any;
          }
      }
     })
  }

  get_LedgersWaitingForApproval(){
    this._noteService.get_LedgersWaitingForApproval().subscribe((res:any)=>{
     // debugger;
     
     this.LedgersWaitingForApproval = res.ledgersWaitingForApproval;
     })
  }
  getDailyExpenseRevenue(){
    //debugger;
    const startDate = new Date(); // current date and time
    //startDate.setHours(0, 0, 0, 0); // set time to 00:00:00.000

    const endDate = new Date();
    //endDate.setHours(23, 59, 59, 999);
    this._noteService.getProfitLossStatement(startDate.toISOString(),endDate.toISOString(),21).subscribe((res:any)=>{
      this.balanceSheet=res as BalanceSheetViewModel;
    })
    this._noteService.getProfitLossStatement(startDate.toISOString(),endDate.toISOString(),24).subscribe((res:any)=>{
      this.AdministrativeExpences=res as BalanceSheetViewModel;
      this.operatingExpenses=this.operatingExpenses+this.AdministrativeExpences.balance;
    })
    this._noteService.getProfitLossStatement(startDate.toISOString(),endDate.toISOString(),25).subscribe((res:any)=>{
      this.MarketingExpences=res as BalanceSheetViewModel;
      this.operatingExpenses=this.operatingExpenses+this.MarketingExpences.balance;
    })
  }

  convertStringToDate(inputString: string): Date {
  return new Date(inputString);
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();

  }

  setData() {
    for (let idx = 0; idx < 4; idx++) {
      this.data[idx] = {
        labels: idx < 3 ? this.labels.slice(0, 7) : this.labels,
        datasets: this.datasets[idx]
      };
    }
    this.setOptions();
  }

  setOptions() {
    for (let idx = 0; idx < 4; idx++) {
      const options = JSON.parse(JSON.stringify(this.optionsDefault));
      switch (idx) {
        case 0: {
          this.options.push(options);
          break;
        }
        case 1: {
          options.scales.y.min = -9;
          options.scales.y.max = 39;
          this.options.push(options);
          break;
        }
        case 2: {
          options.scales.x = { display: false };
          options.scales.y = { display: false };
          options.elements.line.borderWidth = 2;
          options.elements.point.radius = 0;
          this.options.push(options);
          break;
        }
        case 3: {
          options.scales.x.grid = { display: false, drawTicks: false };
          options.scales.x.grid = { display: false, drawTicks: false, drawBorder: false };
          options.scales.y.min = undefined;
          options.scales.y.max = undefined;
          options.elements = {};
          this.options.push(options);
          break;
        }
      }
    }
  }
}

@Component({
  selector: 'app-chart-sample',
  template: '<c-chart type="line" [data]="data" [options]="options" width="300" #chart></c-chart>'
})
export class ChartSample implements AfterViewInit {

  constructor() {}

  @ViewChild('chart') chartComponent!: ChartjsComponent;

  colors = {
    label: 'My dataset',
    backgroundColor: 'rgba(77,189,116,.2)',
    borderColor: '#4dbd74',
    pointHoverBackgroundColor: '#fff'
  };

  labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  data = {
    labels: this.labels,
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      ...this.colors,
      fill: { value: 65 }
    }]
  };

  options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      const data = () => {
        return {
          ...this.data,
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            ...this.data.datasets[0],
            data: [42, 88, 42, 66, 77],
            fill: { value: 55 }
          }, { ...this.data.datasets[0], borderColor: '#ffbd47', data: [88, 42, 66, 77, 42] }]
        };
      };
      const newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
      const newData = [42, 88, 42, 66, 77];
      let { datasets, labels } = { ...this.data };
      // @ts-ignore
      const before = this.chartComponent?.chart?.data.datasets.length;
      console.log('before', before);
      // console.log('datasets, labels', datasets, labels)
      // @ts-ignore
      // this.data = data()
      this.data = {
        ...this.data,
        datasets: [{ ...this.data.datasets[0], data: newData }, {
          ...this.data.datasets[0],
          borderColor: '#ffbd47',
          data: [88, 42, 66, 77, 42]
        }],
        labels: newLabels
      };
      // console.log('datasets, labels', { datasets, labels } = {...this.data})
      // @ts-ignore
      setTimeout(() => {
        const after = this.chartComponent?.chart?.data.datasets.length;
        console.log('after', after);
      });
    }, 5000);
  }
}

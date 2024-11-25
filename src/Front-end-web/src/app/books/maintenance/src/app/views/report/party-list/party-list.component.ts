import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartyViewModel } from 'src/app/models/Party/PartyViewModel';
import { PartyService } from 'src/app/services/Party/party.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent {

  public partyList:any[];
  public party:any[];
  public ledgerSubLedger:any[];
  public endDate:any;
  public startDate:any;
  public ledgerName:any;
  public partyId:any;
  public totalAmt:number =0.00;
  public type:any;

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];

  constructor(
    private _toastr: ToastrService,
    private _partyService:PartyService,
    private _accHeadService:AccHeadService,
    private _datePipe: DatePipe,
    private decimalPipe: DecimalPipe,
  ) {
    this.startDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    this.endDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getAllParty();
    this.loadCategoriesForDebit();
    this.getAllPartyList();
  }
  getAllParty(){
    this._partyService.getAllParty().subscribe((res:any)=>{
      this.party=res as PartyViewModel[];
      
    })
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  loadCategoriesForDebit() {
    let id=0;
    this._accHeadService.getAllCategoryAccHeadCategoryId(id).subscribe({
      next: (result) => {
        this.ledgerSubLedger = result;
        console.log(this.ledgerSubLedger,"this.partythis.partythis.party");
      },
      error: (response) => {
      },
    });
  }




  getAllPartyList(){
    if(this.ledgerName==undefined){
      this.ledgerName="EmptyString";
    }
    if(this.partyId==undefined){
      this.partyId=0;
    }

    this._partyService.getAllPartyTransaction(this.ledgerName,this.startDate,this.endDate,this.partyId).subscribe((res:any)=>{
      this.partyList= res as any[];
      this.totalAmt = this.partyList.reduce((accumulator, currentValue) => accumulator + currentValue["amount"], 0);
    })


    if(this.ledgerName=="EmptyString"){
      this.ledgerName=null;
    }
    if(this.partyId==0){
      this.partyId=null;
    }
    
  } 

  filteredList(){
    this.getAllPartyList();
  }




  getReport(){

    if(this.type==undefined || this.type==null){
      this.type="PDF";
    }
    if(this.partyId==undefined || this.partyId==null){
      this.partyId=0;
    }
    if(this.ledgerName==undefined || this.ledgerName==null){
      this.ledgerName="EmptyString";
    }

    let param={type:this.type,ledgerName:this.ledgerName,startDate:this.startDate,endDate:this.endDate,partyId:this.partyId};
    
    this._partyService.getAllPartyDetailsReport(this.type,this.ledgerName,this.startDate,this.endDate,this.partyId).subscribe((res:any)=>{
      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
    //  let url=window.URL.createObjectURL(blob);
    //  window.open(url); 
    a.click();

    if(this.ledgerName=="EmptyString"){
      this.ledgerName=null;
    }
    if(this.partyId==0){
      this.partyId=null;
    }
    })
  }
}

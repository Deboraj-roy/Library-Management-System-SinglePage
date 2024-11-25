import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { NumberFormatPipe } from 'src/app/number-format.pipe';

@Component({
  selector: 'app-journal-voucher-list',
  templateUrl: './journal-voucher-list.component.html',
  styleUrls: ['./journal-voucher-list.component.scss']
})
export class JournalVoucherListComponent {

  public enddatePipeString:any;
  public startdatePipeString: any;
  public listOfLedger:any[]=[];
  public ListOfvoucher:any[]=[];
  public open:boolean=false;
  public openModal:boolean=false;
  public searchText:any;
  
  
constructor(
  private _toastr: ToastrService,
  private _fb: FormBuilder,
  private _accHeadService: AccHeadService,
  private _entryService: EntryService,
  private _datePipe: DatePipe,
  private _NumberFormatPipe: NumberFormatPipe,
  
) {
  this.startdatePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  this.enddatePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }                  
  ngOnInit(): void {
  this.getVoucherByType();
  }

  numberFormat(number: number): string {
    return this._NumberFormatPipe.transform(number);
  }

  getVoucherByType(){
    let type="Journal";
    this._entryService.getVoucherByType(type).subscribe((res:any)=>{
     this.ListOfvoucher=res as any[]; 
    })
  }

  getLedgerByVoucher(){
    let type='Journal';
   this._entryService.getLedgerByVoucher(type,this.startdatePipeString,this.enddatePipeString).subscribe((res:any)=>{
    this.listOfLedger= res as any [];
   })
  }

  getVoucher(ent:any){ 
    this.searchText=ent;
    if(ent==undefined){
      ent='';
      this.listOfLedger.splice(0);
    }
    if(ent!=''){
      this.openModal=true;
      this._entryService.getVoucherByVoucherType(this.searchText).subscribe((res:any)=>{
        this.listOfLedger= res as any [];
        this.open=true;
      })
    }
    else{
      this.openModal=false;
    }
  }
  deleteVoucher(){
    this._entryService.deleteVoucher(this.searchText).subscribe((res:any)=>{
      this.showToast(res);
      this.getLedgerByVoucher();
      this.getVoucherByType();
    })
  }

  showToast(toastmsg:any){
    if (toastmsg.status == 200) {
      this._toastr.success(toastmsg.message);
    } else if (toastmsg.status == 201) {
      this._toastr.warning(toastmsg.message);
    } else if (toastmsg.status == 202) {
      this._toastr.info(toastmsg.message);
    } else {
      this._toastr.error(toastmsg.message);
    }
 
  }
}

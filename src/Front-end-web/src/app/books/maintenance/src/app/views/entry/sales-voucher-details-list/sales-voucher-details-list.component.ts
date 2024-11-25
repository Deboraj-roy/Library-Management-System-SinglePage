import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { NumberFormatPipe } from 'src/app/number-format.pipe';
import { NoteService } from 'src/app/services/Note/note.service';


@Component({
  selector: 'app-sales-voucher-details-list',
  templateUrl: './sales-voucher-details-list.component.html',
  styleUrls: ['./sales-voucher-details-list.component.scss']
})
export class SalesVoucherDetailsListComponent {

  public enddatePipeString:any;
  public startdatePipeString: any;
  public selected: any;
  public listOfLedger:any[]=[];
  public ListOfvoucher:any[]=[];
  public open:boolean=false;
  public openModal:boolean=false;
  public searchText:any;
  public listOfItem:any[]=[];
  public listOfMinorCategory:any[]=[];
  public receiptModel:any;
  public ledgerId :any;
  public subledgerId:any;
  public totalQty:any;
  public totalamount:any;
  public netTotal:any;
  public totalDiscount:any;
  voucherDetails: any[] = [];
  
  public listOfType:any[]=[ 
                      {name:'Cash Payment',type:'CashPayment',id:1},
                      {name:'Bank Payment',type:'BankPayment',id:2},
                    ]
  
constructor(
  private _toastr: ToastrService,
  private _fb: FormBuilder,
  private _accHeadService: AccHeadService,
  private _entryService: EntryService,
  private _datePipe: DatePipe,
  private _NumberFormatPipe: NumberFormatPipe,
  private _noteService : NoteService
  
) {
  this.startdatePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  this.enddatePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }                  
  ngOnInit(): void {
  //this.getVoucherByType();
  this.getInventoryItemByMajorCategoryId();
  this.getMinorCategoryByMajorCategoryId();
  }

  numberFormat(number: number): string {
    return this._NumberFormatPipe.transform(number);
  }

  getMinorCategoryByMajorCategoryId(){
    let id=93;
    this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res:any)=>{
      this.listOfMinorCategory=res as any[];
      console.log (this.listOfMinorCategory);
    })
  }

  getInventoryItemByMajorCategoryId(){
    let id=88;
    this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res:any)=>{
      this.listOfItem=res as any[];
      
    })
  }
  
  getSubLedgerId(evn:any){
    console.log(evn,"id");

    if(evn==undefined){
      this.ledgerId=0;
      this.subledgerId=0;
    }
    else{
      this.receiptModel=this.listOfMinorCategory.find(p=>p.id==evn.id);
      console.log(this.receiptModel);
      this.ledgerId=this.receiptModel.ledgerId;
      this.subledgerId=this.receiptModel.subledgerId;
      console.log(this.ledgerId);
    }
    
  }

  

  // getVoucherByType(){
  //   let type="SalesVoucher";
  //   this._entryService.getVoucherByType(type).subscribe((res:any)=>{
  //    this.ListOfvoucher=res as any[]; 
  //   })
  // }

  getLedgerByVoucher(){
    debugger;
    this.listOfLedger[0];
    if(this.ledgerId=='undefined' || this.ledgerId==null){
      this.ledgerId=0;
      this.subledgerId=0;
    }
    this._entryService.getVoucherDetails("SalesVoucher",this.startdatePipeString,this.enddatePipeString,this.ledgerId).subscribe((res:any)=>{
    this.listOfLedger= res as any [];
    this.open=true;
    this.totalQty=0;
    this.totalamount =0;
    this.totalDiscount=0;
    this.netTotal=0;
    let i=0;
    for(i;i<this.listOfLedger.length;i++){
      this.totalQty = this.totalQty+this.listOfLedger[i].quantity;
      this.totalamount=this.totalamount+ this.listOfLedger[i].debit;
      this.netTotal = this.netTotal+(this.listOfLedger[i].debit -this.listOfLedger[i].discount);
      this.totalDiscount = this.totalDiscount+this.listOfLedger[i].discount;
    }
   })
  }

  VoucherDetails(voucherId: string) {

    this._entryService.getVoucherItemsDetails(voucherId).subscribe((res:any)=>{
    this.voucherDetails= res as any [];
    //this.open=true;
   })
   
    
  }

  GetInvoiceReport(Voucher:any){
    this._noteService.getSalesInvoiceReport(Voucher,'PDF').subscribe((res:any)=>{
      debugger
       let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
       let blob:Blob=res.body as Blob;
       let a=document.createElement('a');
       a.download=fileName;
       a.href=window.URL.createObjectURL(blob);
       a.click();
       window.URL.revokeObjectURL(a.href);
     })
  }

  // getVoucher(ent:any){ 
  //   this.searchText=ent;
  //   if(ent==undefined){
  //     ent='';
  //     this.listOfLedger.splice(0);
  //   }
  //   if(ent!=''){
  //     this.openModal=true;
  //     this._entryService.getVoucherByVoucherType(this.searchText).subscribe((res:any)=>{
  //       this.listOfLedger= res as any [];
  //       this.open=true;
  //     })
  //   }
  //   else{
  //     this.openModal=false;
  //   }
  // }
  // deleteVoucher(){
  //   this._entryService.deleteVoucher(this.searchText).subscribe((res:any)=>{
  //     this.showToast(res);
  //     this.getLedgerByVoucher();
  //     this.getVoucherByType();
  //   })
  // }

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

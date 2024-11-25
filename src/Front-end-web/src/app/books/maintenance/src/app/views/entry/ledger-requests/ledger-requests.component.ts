import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LedgerRequestViewModel } from 'src/app/models/Entry/LedgerRequestViewModel';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';

@Component({
  selector: 'app-ledger-requests',
  templateUrl: './ledger-requests.component.html',
  styleUrls: ['./ledger-requests.component.scss']
})
export class LedgerRequestsComponent {

  public ledgerReqList: LedgerRequestViewModel[]=[];
  public detailsList: LedgerRequestViewModel[]=[];
  public searchText:any;
  public totalDebit: number = 0;
  public totalCredit: number = 0;
  public voucherNo: string ='';
  public isButtonClicked: boolean = false;
  count:number=0;
  page:number=1;
  tableSize:number=50;


  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _EntryService: EntryService,
  ) {}


  ngOnInit(): void {
    this.getAllLedgerReqs();
  }


  getAllLedgerReqs(){
    this._EntryService.getAllLedgerReqs().subscribe((res:any)=>{
      this.ledgerReqList=res as LedgerRequestViewModel[];
    })
  }

  //not for edit or update
  getAllLedgerRequestsDetails(voucherNumber: string){
    this._EntryService.getAllLedgerRequestsDetails(voucherNumber).subscribe((res:any)=>{
      this.voucherNo = voucherNumber;
      this.detailsList=res as LedgerRequestViewModel[];
      this.totalDebit = this.detailsList.filter(item => item.ledgerType === 'Dr').reduce((sum, current) => sum + current.amount, 0);
      this.totalCredit = this.detailsList.filter(item => item.ledgerType === 'Cr').reduce((sum, current) => sum + current.amount, 0);
    })
  }

  
  onTableDataChange(event:any){
    debugger;
    this.page=event;
    this.getAllLedgerReqs();
   }


  //not for edit or update
  ViewLedgerRequestsDetails(model:any){
    debugger;
    this.getAllLedgerRequestsDetails(model.voucherNumber);
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

  
  ApproveLedgerReq(voucherNumber: string){
    this.isButtonClicked = true;
      this._EntryService.ApproveLedgerReq(voucherNumber).subscribe((res:any)=>{
        if(res == 1){
          this._toastr.success("Ledger Approved Successfully!");
          this.isButtonClicked = false;
        }
        else if(res == 2){
          this._toastr.warning("Ledger Already Approved!");
          this.isButtonClicked = false;
        }
        else{
          this._toastr.warning("Ledger Not Approved!");
          this.isButtonClicked = false;
        }
      })
   }
}

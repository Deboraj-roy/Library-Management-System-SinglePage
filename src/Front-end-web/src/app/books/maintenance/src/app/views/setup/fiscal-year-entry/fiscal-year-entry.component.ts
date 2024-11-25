import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { FiscalYearEntryViewModel } from 'src/app/models/Note/FiscalYearEntryViewModel';

@Component({
  selector: 'app-fiscal-year-entry',
  templateUrl: './fiscal-year-entry.component.html',
  styleUrls: ['./fiscal-year-entry.component.scss']
})
export class FiscalYearEntryComponent {

  public fiscalYearFrom:FormGroup;
  public listFiscalYear:any[]=[];
  public statuss:any[]=[{id:1,name:"Active"},{id:0,name:"InActive"}];
  public searchText:any;
 
  public editStartDate:any;
  public editEndDate:any;
  public editId:any;
  public editStatus:any;
  public editName:any;

  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _entryService: EntryService,
    private datePipe: DatePipe,
    )
  {}

  ngOnInit(): void {
    this.create();
    this.getFiscalYear();
  }

  getFiscalYear(){
    this._entryService.getFiscalYear().subscribe((res:any)=>{
      this.listFiscalYear= res as any [];
    })
  }

  deleteFiscalYear(id:any){
    this._entryService.deleteFiscalYear(id).subscribe((res:any)=>{
      this.showToast(res);
        this.getFiscalYear();
    })
  }


  editFiscalYear(model:any){
    this.editStartDate=this.datePipe.transform(model.startMonthName, 'MMMM yyyy');
    this.editEndDate=this.datePipe.transform(model.endMonthName, 'MMMM yyyy');
    this.editName=model.fiscalYearName;
    this.editStatus=model.status;
    this.editId=model.fiscalYearId;
  }

  updateFiscalYear(){
    let fiscalYearEntryViewModel = new FiscalYearEntryViewModel();
    fiscalYearEntryViewModel.startMonthName=this.editStartDate;
    fiscalYearEntryViewModel.endMonthName=this.editEndDate;
    fiscalYearEntryViewModel.fiscalYearId=this.editId;
    fiscalYearEntryViewModel.fiscalYearName=this.editName;
    fiscalYearEntryViewModel.status=this.editStatus; 
      this._entryService.saveFiscalYear(fiscalYearEntryViewModel).subscribe((res:any)=>{
        this.showToast(res);
        this.getFiscalYear();
      });
  }

  saveFiscalYear(){
    console.log(this.fromval);
    if(this.fiscalYearFrom.valid){
      this._entryService.saveFiscalYear(this.fromval).subscribe((res:any)=>{
        this.showToast(res);
        this.create();
        this.getFiscalYear();
      });
    }
    else{
      this._toastr.info("Please Select");
    }
  }

  create(){
    this.fiscalYearFrom=this._fb.group({
      fiscalYearId:[0,[]],
      fiscalYearName:[,[Validators.required]],
      startMonthName:[,[Validators.required]],
      endMonthName:[,[Validators.required]],
      status:[,[Validators.required]],
    })
  }


  get fromval(){
    return this.fiscalYearFrom.value;
  }
  get g() {
    return this.fiscalYearFrom.controls;
  }

  showToast(toastmsg: any) {
    if (toastmsg.status == 200) {
      this._toastr.success(toastmsg.message);
    } else if (toastmsg.status == 201) {
      this._toastr.success(toastmsg.message);
    } else if (toastmsg.status == 202) {
      this._toastr.info(toastmsg.message);
    } else {
      this._toastr.error(toastmsg.message);
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  public subLedgerList:any[]=[];
  public searchText:any;

  constructor(
    private _toastr: ToastrService,
    private _entryService: EntryService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllSubLedgerByMajorCategory();
  }


  getAllSubLedgerByMajorCategory(){
    let id=93;
    this._entryService.getVandorOrCustomerByMinorCategory(id).subscribe((res:any)=>{
      this.subLedgerList= res as any[];
      console.log(this.subLedgerList,"this.subLedgerList");
    })
  }


  gotoDetails(getData:any){
    this._router.navigate(["admin/report/sub-ledger-details"],{state:getData});
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent {

  public subLedgerList:any[]=[];
  public searchText:any;
  

  constructor(
    private _toastr: ToastrService,
    private _entryService: EntryService,
    private _partyService:PartyService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllSubLedgerByMajorCategory();
    
  }
  
  getAllSubLedgerByMajorCategory(){
    let id=65;
    this._entryService.getVandorOrCustomerByMinorCategory(id).subscribe((res:any)=>{
      this.subLedgerList= res as any[];
    })
  }

  gotoDetails(getData:any){
    this._router.navigate(["admin/report/sub-ledger-details"],{state:getData});
  }

  

  

}


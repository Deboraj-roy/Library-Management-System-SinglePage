import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-details-list',
  templateUrl: './item-details-list.component.html',
  styleUrls: ['./item-details-list.component.scss']

})
export class ItemDetailsListComponent implements OnInit {
  fromDate: string = '';
  toDate: string = '';
  selectedItemId: any = null;
  listOfItem: any[] = [];
  selectedItemDetails: any = {};
  inventoryDetails: any[] = [];

  public type:any;

  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];

  constructor(
    private _entryService: EntryService, 
    private _partyService: PartyService,
    private _toastr: ToastrService,) {

    }

  ngOnInit(): void {
    this.getInventoryItemByMajorCategoryId();
  }

  getInventoryItemByMajorCategoryId() {
    const id = 88;
    this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res: any) => {
      this.listOfItem = res as any[];
      console.log('List of Items:', this.listOfItem);  // Log the items to check if they are loaded correctly
    });
  }

  getItemDetails(selectedItemId: any) {
    console.log('Selected Item ID:', selectedItemId);  // Log the selected item ID
    console.log('Selected All:', selectedItemId);
    // Find the item with the matching ledgerId
    this.selectedItemDetails = {
      accLedgerName: 0,
      itemSubLedgerCode: 0,
      itemLedgerCode:0,
      ledgerId: 0,
      subLedgerId: 0
    };
    const item = this.listOfItem.find(i => i.id === selectedItemId.id);
    if (item) {
      this.selectedItemDetails = {
        accLedgerName: item.accountName,
        itemSubLedgerCode: item.subledgerCode,
        itemLedgerCode: item.ledgerCode,
        ledgerId: item.ledgerId,
        subLedgerId: item.subledgerId
      };
      console.log('Selected Item Details:', this.selectedItemDetails);  // Log selected item details
    } else {
      console.error('Invalid selection or item not found');
    }
  }

  searchInventory() {
    debugger;
    var IsValid = true;
    var ledgerId = this.selectedItemDetails.ledgerId;
    var subLedgerId = this.selectedItemDetails.subLedgerId;
     if((ledgerId ==null ||ledgerId ==0) && (subLedgerId == null ||subLedgerId ==0)){
      console.log(ledgerId);
      ledgerId=0;
      subLedgerId =0;
       //this._toastr.info("Select Item..!!");
    //   IsValid =false;
      }
    if(this.fromDate == null || this.toDate==null ){
      this._toastr.info("Select Date Range..!!");
      IsValid =false;
    }

    if (IsValid) {
      this._partyService.getInventoryDetails(this.fromDate, this.toDate, ledgerId, subLedgerId).subscribe((data: any) => {
        this.inventoryDetails = data;  // Assume data is an array of inventory details
        console.log('Inventory Details:', this.inventoryDetails);  // Log the inventory details
      });
    } else {
      console.error('No item selected or invalid details');
      //this._toastr.info("");
    }
  }

  getReport(){
    debugger;
    var IsValid = true;
    var ledgerId = this.selectedItemDetails.ledgerId;
    var subLedgerId = this.selectedItemDetails.subLedgerId;
    if((ledgerId ==null ||ledgerId ==0) && (subLedgerId == null ||subLedgerId ==0)){
      console.log(ledgerId);
      
      ledgerId=0;
      subLedgerId =0;
      //this._toastr.info("Select Item..!!");
      //IsValid =false;
    }
    if(this.fromDate == null || this.toDate==null ){
      this._toastr.info("Select Date Range..!!");
      IsValid =false;
    }
    if(IsValid){

      this._partyService.getInventoryDetailsReport(this.fromDate, this.toDate, ledgerId, subLedgerId,this.type).subscribe((res:any)=>{
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
   
  }
}

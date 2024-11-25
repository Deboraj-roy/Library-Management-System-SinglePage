import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-wise-profit',
  templateUrl: './product-wise-profit.component.html',
  styleUrls: ['./product-wise-profit.component.scss']
})
export class ProductWiseProfitComponent {

  fromDate: string = '';
  toDate: string = '';
  selectedItemId: any = null;
  listOfItem: any[] = [];
  selectedItemDetails: any = {};
  inventoryDetails: any[] = [];

  public type:any;
  groupedInventoryDetails: any[] = [];
  grandTotals: any = {
    openingStockQty: 0,
    inWard: 0,
    inWardValue: 0,
    outWard: 0,
    outWardValue: 0,
    closingStockQty: 0
  };

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
    //this.calculateGrandTotals();
  }

  getInventoryItemByMajorCategoryId() {
    const id = 88;
    this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res: any) => {
      this.listOfItem = res as any[];
      console.log('List of Items:', this.listOfItem);  // Log the items to check if they are loaded correctly
    });
  }

  getItemDetails(selectedItemId: any) {
    debugger;
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

  // searchInventory() {
  //   debugger;
  //   var IsValid = true;
  //   var ledgerId = this.selectedItemDetails.ledgerId;
  //   var subLedgerId = this.selectedItemDetails.subLedgerId;
  //    if((ledgerId ==null ||ledgerId ==0) && (subLedgerId == null ||subLedgerId ==0)){
  //     console.log(ledgerId);
  //     ledgerId=0;
  //     subLedgerId =0;
  //      //this._toastr.info("Select Item..!!");
  //   //   IsValid =false;
  //     }
  //   if(this.fromDate == null || this.toDate==null ){
  //     this._toastr.info("Select Date Range..!!");
  //     IsValid =false;
  //   }

  //   if (IsValid) {
  //     this._partyService.getInventoryLists(this.fromDate, this.toDate, ledgerId, subLedgerId).subscribe((data: any) => {
  //       this.inventoryDetails = data;  // Assume data is an array of inventory details
  //       console.log('Inventory Details:', this.inventoryDetails);  // Log the inventory details
  //     });
  //   } else {
  //     console.error('No item selected or invalid details');
  //     //this._toastr.info("");
  //   }
  // }

  searchInventory() {
    debugger;
    var IsValid = true;
    var ledgerId = this.selectedItemDetails.ledgerId;
    var subLedgerId = this.selectedItemDetails.subLedgerId;
  
    if ((ledgerId == null || ledgerId == 0) && (subLedgerId == null || subLedgerId == 0)) {
      console.log(ledgerId);
      ledgerId = 0;
      subLedgerId = 0;
    }
  
    if (this.fromDate == null || this.toDate == null) {
      this._toastr.info("Select Date Range..!!");
      IsValid = false;
    }
  
    if (IsValid) {
      this._partyService.getInventoryListsForProfit(this.fromDate, this.toDate, ledgerId, subLedgerId).subscribe((data: any) => {
        this.inventoryDetails = data;  // Assume data is an array of inventory details
        console.log('Inventory Details:', this.inventoryDetails);  // Log the inventory details
        this.calculateGrandTotals();
        // Group the data by item and date
        this.groupedInventoryDetails = this.inventoryDetails.reduce((acc, detail) => {
          const itemGroup = acc.find(i => i.itemName === detail.itemName);
          if (itemGroup) {
            itemGroup.details.push(detail);
          } else {
            acc.push({ itemName: detail.itemName, details: [detail] });
          }
          return acc;
        }, []);
  
        console.log('Grouped Inventory Details:', this.groupedInventoryDetails);  // Log the grouped details
      });
    } else {
      console.error('No item selected or invalid details');
    }
  }

  calculateGroupTotals(group: any) {
    const totals = {
      openingStockQty: 0,
      inWard: 0,
      inWardValue: 0,
      outWard: 0,
      outWardValue: 0,
      closingStockQty: 0,
      sallingCostPrice:0,
      profitInPercent:0,
      grossProfit:0

    };

    group.details.forEach(detail => {
      totals.openingStockQty += detail.openingStockQty;
      totals.inWard += detail.inWard;
      totals.inWardValue += detail.inWardValue;
      totals.outWard += detail.outWard;
      totals.outWardValue += detail.outWardValue;
      totals.closingStockQty += detail.closingStockQty;
      totals.sallingCostPrice+= detail.sallingCostPrice;
      totals.grossProfit+= detail.grossProfit;
      totals.profitInPercent+= detail.profitInPercent;
    });

    this.grandTotals.openingStockQty += totals.openingStockQty;
      this.grandTotals.inWard += totals.inWard;
      this.grandTotals.inWardValue += totals.inWardValue;
      this.grandTotals.outWard += totals.outWard;
      this.grandTotals.outWardValue += totals.outWardValue;
      this.grandTotals.closingStockQty += totals.closingStockQty;

    return totals;
  }

  calculateGrandTotals() {
    debugger;
    this.grandTotals = {
      openingStockQty: 0,
      inWard: 0,
      inWardValue: 0,
      outWard: 0,
      outWardValue: 0,
      closingStockQty: 0
    };

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

      this._partyService.getInventoryProfitReport(this.fromDate, this.toDate, ledgerId, subLedgerId,this.type).subscribe((res:any)=>{
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

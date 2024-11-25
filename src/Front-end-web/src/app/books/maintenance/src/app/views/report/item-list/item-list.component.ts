import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MinorCategory } from 'src/app/models/acc-heads/MinorCategory';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  public searchText:any;
  public type:any;
  public itemList:any[]=[];
  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];
  public totalItemRemainAmt:number = 0.0;
  public totalFifoStockValueAmt:number = 0.0;
  public totalAvgStockValueAmt:number = 0.0;
  public totalSaleAmt:number = 0.0;
  public totalPurchasePriceAmt:number = 0.0;
  public totalPurchaseAmt:number = 0.0;
  public listOfMinorCategory:MinorCategory[]=[];
  public selectedItemDetails: any = {};
  selectedItemId: any = null;
  constructor(
    private _toastr: ToastrService,
    private _partyService: PartyService,
    private decimalPipe: DecimalPipe,
    private _entryService : EntryService
  ) {}

  ngOnInit(): void {
    this.getAllItemSummaryy();
    this.getMinorCategoryByMajorCategoryId();
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

   
  getMinorCategoryByMajorCategoryId(){
    let id=88;
    this._entryService.getMinorCategoryByMajorCategory(id).subscribe((res:any)=>{
      this.listOfMinorCategory=res as MinorCategory[];
    })
  }

  getItemDetails(selectedItemId: any) {
    console.log('Selected Item ID:', selectedItemId);  // Log the selected item ID
    console.log('Selected All:', selectedItemId);
    // Find the item with the matching ledgerId
    this.selectedItemDetails = {
      minorCategoryName: 0,
      minorCategoryCode: 0,
      minorCategoryId: 0,
      
    };
    const item = this.listOfMinorCategory.find(i => i.minorCategoryId === selectedItemId.minorCategoryId);
    if (item) {
      this.selectedItemDetails = {
        minorCategoryName: item.minorCategoryName,
        minorCategoryCode: item.minorCategoryCode,
        minorCategoryId: item.minorCategoryId,
        
      };
      console.log('Selected Item Details:', this.selectedItemDetails);  // Log selected item details
    } else {
      console.error('Invalid selection or item not found');
    }
  }



  getAllItemSummaryy(){
    let name="rakib";
    var id = this.selectedItemDetails.minorCategoryId;
    if(this.selectedItemDetails.minorCategoryId==null ){
     id=0;
    }
    console.log(id);
    this._partyService.getAllItemSummary(name,id).subscribe((res:any)=>{
      this.itemList= res as any [];
      //console.log(this.itemList,"this.itemListthis.itemListthis.itemList");
      this.totalPurchaseAmt = this.itemList.reduce((accumulator, currentValue) => accumulator + currentValue["totalPurchase"], 0);
      this.totalPurchasePriceAmt = this.itemList.reduce((accumulator, currentValue) => accumulator + currentValue["totalPurchasePrice"], 0);
      this.totalSaleAmt = this.itemList.reduce((accumulator, currentValue) => accumulator + currentValue["totalSales"], 0);

      for(let i=0;i<this.itemList.length;i++)
      {
        this.totalAvgStockValueAmt = this.totalAvgStockValueAmt + ((this.itemList[i].totalPurchase - this.itemList[i].totalSales)*this.itemList[i].stockPrice);
        this.totalFifoStockValueAmt = this.totalFifoStockValueAmt + (this.itemList[i].totalPurchasePrice-this.itemList[i].totalSalesPrice);
        this.totalItemRemainAmt = this.totalItemRemainAmt + ((this.itemList[i].totalPurchase+this.itemList[i].totalReturnSales) - (this.itemList[i].totalSales+this.itemList[i].totalReturnPurchase));
      }
    })
  }

  getReport(){
     debugger;
     var IsValid = true;
    
    var id = this.selectedItemDetails.minorCategoryId;
    if(this.selectedItemDetails.minorCategoryId==null){
     id=0;
    
    }
    if(IsValid){

      this._partyService.getInventoryReport(id,this.type).subscribe((res:any)=>{
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

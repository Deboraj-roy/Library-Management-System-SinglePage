import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Models } from 'src/app/models/PurchaseOrder/Models';
import { SavePurchaseOrder } from 'src/app/models/PurchaseOrder/SavePurchaseOrder';
import { PurchaseOrderVM } from 'src/app/models/PurchaseOrder/PurchaseOrderVM';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/users/user.service';
import { PurchaseOrderService } from 'src/app/services/PurchaseOrder/purchase-order.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent {

  public PurchaseOrderForm:FormGroup;
  public ddlModels: Models[] = [];
  public SavePurchaseOrder: SavePurchaseOrder;
  public ordersList: PurchaseOrderVM[]=[];
  public payList: PurchaseOrderVM[]=[];
  public ddlStatusList:any[]=[{id:"Open",name:"Open"},{id:"Closed",name:"Closed"}];
  public searchText:any;
  public selectedModelName: string = '';
  public selectedModelNameChanged: number = 0;
  public totalCost: number;
  public unitCost: number;

  public editOrderCode:any;
  public editQuantity:any;
  public editfob:any;
  public editStatus:any;
  public editPurchaseOrderId:any;
  public editMinorSubCategoryName:any;
  public editMinorSubCategoryId:any;

  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _PurchaseOrderService: PurchaseOrderService,
    private decimalPipe: DecimalPipe
  ) {}


  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  ngOnInit(): void {
    this.create();
    this.loadddlModels();
    this.getAllPurchaseOrder();
  }

  loadddlModels() {
    this._PurchaseOrderService.getAllddlModels().subscribe({
      next: (result) => {
        this.ddlModels = result as Models[];
       console.log(this.ddlModels);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  getAllPurchaseOrder(){
    this._PurchaseOrderService.getAllPurchaseOrder().subscribe((res:any)=>{
      this.ordersList=res as PurchaseOrderVM [];
      console.log(this.ordersList);
    })
  }

  //not for edit or update
  getAllPurchaseOrderTransactions(purchaseOrderId: number){
    this._PurchaseOrderService.getAllPurchaseOrderTransactions(purchaseOrderId).subscribe((res:any)=>{
      this.payList=res as PurchaseOrderVM [];
      this.totalCost = this.payList[0]?.totalCostPrice;
      this.unitCost = this.payList[0]?.unitCostPrice;
      console.log(this.payList);
    })
  }
  savePurchaseOrder(){
    debugger;
    console.log(this.formval);
    if(this.PurchaseOrderForm.valid){
      this.SavePurchaseOrder=this.formval;
      this.SavePurchaseOrder.MinorSubCategoryName = this.selectedModelName;
      this.selectedModelName='';
      this._PurchaseOrderService.savePurchaseOrder(this.SavePurchaseOrder).subscribe((res:any)=>{
        this.showToast(res);
        this. create();
        this.getAllPurchaseOrder();
     })
    }
     else{
       this._toastr.error("Please Provide Valid Info");
     }
  }

  editPurchaseOrder(model:any){
    this.editOrderCode=model.purchaseOrderCode;
    this.editQuantity=model.quantity;
    this.editfob=model.fob;
    this.editStatus=model.status;
    this.editPurchaseOrderId=model.purchaseOrderId;
    this.editMinorSubCategoryName=model.minorSubCategoryName;
    this.editMinorSubCategoryId=model.minorSubCategoryId;
  }

  
  //not for edit or update
  ViewPurchaseOrderTransactions(model:any){
    debugger;
    this.editOrderCode=model.purchaseOrderCode;
    this.editQuantity=model.quantity;
    this.editfob=model.fob;
    this.editStatus=model.status;
    this.editPurchaseOrderId=model.purchaseOrderId;
    this.editMinorSubCategoryName=model.minorSubCategoryName;
    this.editMinorSubCategoryId=model.minorSubCategoryId;
    this.getAllPurchaseOrderTransactions(model.purchaseOrderId);
  }

  updatePurchaseOrder(){
    let objPOVM = new PurchaseOrderVM();
    objPOVM.PurchaseOrderId=this.editPurchaseOrderId;
    objPOVM.PurchaseOrderCode=this.editOrderCode;
    objPOVM.MinorSubCategoryId=this.editMinorSubCategoryId;
    if(this.selectedModelNameChanged == 1){
      objPOVM.MinorSubCategoryName=this.selectedModelName;
      this.selectedModelNameChanged = 0;
      this.selectedModelName = '';
    }else{
      objPOVM.MinorSubCategoryName=this.editMinorSubCategoryName;
    }
    
    objPOVM.Quantity=this.editQuantity;
    objPOVM.fob=this.editfob;
    objPOVM.Status=this.editStatus;
      this._PurchaseOrderService.savePurchaseOrder(objPOVM).subscribe((res:any)=>{
        this.showToast(res);
        this.getAllPurchaseOrder();
      });
  }

  create(){
    this.PurchaseOrderForm=this._fb.group({
      PurchaseOrderId:[0,[]],
      PurchaseOrderCode:[,[Validators.required]],
      MinorSubCategoryId:[,[Validators.required]],
      Quantity:[,[Validators.required]],
      fob:[,[Validators.required]],
      Status:[,[Validators.required]]
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

  onModelSelected(event: any) {
    debugger;
    let selectedModel = this.ddlModels.find(model => model.minorSubCategoryId === event.minorSubCategoryId);
    if (selectedModel) {
      this.selectedModelNameChanged = 1;
      this.selectedModelName = selectedModel.minorSubCategoryName;
    }
  }
  get formval(){
    return this.PurchaseOrderForm.value;
  }
  get g() {
    return this.PurchaseOrderForm.controls;
  }

  
  getReport(PurchaseOrderId: number){
      this._PurchaseOrderService.getCostingSheetReport(PurchaseOrderId).subscribe((res:any)=>{

      let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      let blob:Blob=res.body as Blob;
      let a=document.createElement('a');
      a.download=fileName;
      a.href=window.URL.createObjectURL(blob);
      a.click();
      })
   }
}

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MinorCategory } from 'src/app/models/acc-heads/MinorCategory';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { UserService } from 'src/app/services/users/user.service';
import { UsersVM } from 'src/app/models/users/UsersVM';
import { NumberFormatPipe } from 'src/app/number-format.pipe';

@Component({
  selector: 'app-purchase-return-voucher',
  templateUrl: './purchase-return-voucher.component.html',
  styleUrls: ['./purchase-return-voucher.component.scss']
})
export class PurchaseReturnVoucherComponent {
  public purchaseForm:FormGroup;
   public datePipeString:any;
   public voucher:any;
   public listOfMinorCategory:any[]=[];
   public listOfPurchase:any[]=[];  
   public listOfItem:any[]=[];
   public debitAmounttotal:any;
   public valuee:any=1;
   public ddlUsers:UsersVM[] = [];
   public userId:any = 1;
   public isButtonClicked: boolean = false;

   public itemDetails:any;
   public remainItem:any;
   public suppLedgerId:any;
   public ItemPric:any;

  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _accHeadService: AccHeadService,
    private _entryService: EntryService,
    private _partyService: PartyService,
    private _datePipe: DatePipe,
    private _UserService: UserService,
    private _NumberFormatPipe: NumberFormatPipe,
    
  ) {
    this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    }

    ngOnInit(): void {
      this.getInventoryItemByMajorCategoryId();
      // this.getMinorCategoryMajorCategoryId();
      this.getMinorCategoryByMajorCategoryId();
      this.getVoucherNumber();
      //this.getCredit();
      this.loadddlUsers();
      this.createForm();
    }

    numberFormat(number: number): string {
      return this._NumberFormatPipe.transform(number);
    }
  
    getVoucherNumber(){
      let type='PurchaseReturnVoucher';
      this._accHeadService.getVoucherNumber(type).subscribe({
        next: (result) => {
          this.voucher=result.data;
        },
        error: (response) => {
        },
      });
    }

    loadddlUsers() {
      debugger;
      this._UserService.getAllddlUsers().subscribe({
        next: (result) => {
          this.ddlUsers = result as UsersVM[];
        },
        error: (response) => {
          console.log(response);
        },
      });
    }
  
    getMinorCategoryByMajorCategoryId(){
      let id=65;
      this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res:any)=>{
        this.listOfMinorCategory=res as any[];
      })
    }

    
    getInventoryItemByMajorCategoryId(){
      let id=88;
      this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res:any)=>{
        this.listOfItem=res as any[];
        
      })
    }

    addItems(){
        (<FormArray>this.purchaseForm.get('multipleItemEntry')).push(this.addItem());
    }
    removeItem(i:any){
      (<FormArray>this.purchaseForm.get('multipleItemEntry')).removeAt(i);
      this.getAmount();
    }

    getItemDetails(item:any,i:any){

      (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).patchValue({
        accLedgerName: item.accountName,
        itemSubLedgerCode: item.subledgerCode,                                                                       
        itemLedgerCode :item.ledgerCode,
        ledgerId :item.ledgerId,
        subLedgerId :item.subledgerId,
        costPrice: 0
        });
       
        
        let subledgerId = item.subledgerId;
        this._partyService.getItemPriceForPurchaseReturn(this.suppLedgerId,subledgerId).subscribe((res:any)=>{
          this.ItemPric=res as any;
          var price  = this.ItemPric.itemPrice;
          (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).patchValue({
            costPrice:price
            });
          
        })

        let name=(item.accountName).split('(')[0];
        this._partyService.getItemSummary(name).subscribe((res:any)=>{
          this.itemDetails=res as any;
          this.remainItem=this.itemDetails.remainItem;
          let Idname='amountt'+i;
          let myDiv = <HTMLElement>document.getElementById(Idname);
          myDiv.innerHTML ='Remain Item : '+this.remainItem; 
        })
    }

    getItemTotal(i:any){
      let Itemtotal= (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).get('itemPrice').value;
      let Quentity= (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).get('quantity').value;
      let total=Itemtotal*Quentity;
      let Idname='amountt'+i;
          
      var myDiv = <HTMLInputElement>document.getElementById(Idname);
      var textBoxVal= (myDiv.innerHTML).split(' : ')[1];
      if(Number(textBoxVal)<Quentity){
        (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).patchValue({
          quantity: 0,
          totalPrice:0,
          });
        this._toastr.error("You have not enough Item");
        return;
      }
      (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).patchValue({
        totalPrice: total,
        });


    }

    
    getAmount(){
      this.debitAmounttotal=0;
      for(var i=0;i<(<FormArray>this.purchaseForm.get('multipleItemEntry')).length;i++){
        this.debitAmounttotal += (<FormArray>this.purchaseForm.get('multipleItemEntry')).at(i).get('totalPrice').value;
      }

      (<FormArray>this.purchaseForm.get('multipleCreaditEntry')).at(0).patchValue({
        amount: this.debitAmounttotal,
        });

        (<FormArray>this.purchaseForm.get('multipleDebitEntry')).at(0).patchValue({
          amount: this.debitAmounttotal,
          });
          

    }

    getCredit(){
     debugger;
      let id=98;
      this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res:any)=>{
        this.listOfPurchase=res as any[];
        
      console.log(res)
      //let name=(this.listOfPurchase[0].accountName).split('(')[0];
      let parts: string[] = (this.listOfPurchase[0].accountName).split("(");
      parts.pop();
      let name: string = parts.join("(");
      let SubLedgerCode=this.listOfPurchase[0].subledgerCode;
      let ledgerCode=this.listOfPurchase[0].ledgerCode;
      let lesgerId=this.listOfPurchase[0].ledgerId;
      let subLedgerId=this.listOfPurchase[0].subledgerId;
      let UniqId=this.listOfPurchase[0].id;

      (<FormArray>this.purchaseForm.get('multipleCreaditEntry')).at(0).patchValue({
        

        creaditUniqId: UniqId,
        creaditLedgerId: lesgerId,                                                                       
        creaditLedgerCode :ledgerCode,
        creaditAccLedgerName:name,     
        creaditSubLedgerId:subLedgerId,
        creaditSubLedgerCode: SubLedgerCode,
        creaditbalance:this.debitAmounttotal,
        });
      })
    }
    getDebitValue(items:any,i:any){
      (<FormArray>this.purchaseForm.get('multipleDebitEntry')).at(i).patchValue({
        debitUniqId: items.id,
        debitLedgerId: items.ledgerId,                                                                       
        debitLedgerCode :items.ledgerCode,
        debitAccLedgerName:(items.accountName).split('(')[0],     
        debitSubLedgerId:items.subledgerId,
        debitSubLedgerCode: items.subledgerCode,
        debitbalance:this.debitAmounttotal,
      });
      this.suppLedgerId = items.ledgerId;
    }
    
    savePurchase(){
      this.isButtonClicked = true;
      this.getCredit();
       debugger;
        if(this.fromval.narration==null){
          this.fromval.invalid=true;
        }
        if(this.fromval.userId==null){
          this.fromval.userId=undefined;
        }
        console.log(this.fromval.multipleDebitEntry);
        for (let i = 0; i < this.fromval.multipleDebitEntry.length; i++){
          if(this.fromval.multipleDebitEntry[i].debitLedgerId==0){
            this.fromval.invalid=true;
          }
        }
        for (let i = 0; i < this.fromval.multipleCreaditEntry.length; i++){
          if(this.fromval.multipleCreaditEntry[i].creaditLedgerId==0){
            this.fromval.invalid=true;
          }
        }
        for (let i = 0; i < this.fromval.multipleItemEntry.length; i++){
          if(this.fromval.multipleItemEntry[i].subLedgerId==0 || this.fromval.multipleItemEntry[i].totalPrice==0){
            this.fromval.invalid=true;
          }
        }
        if(this.fromval.invalid){
          this._toastr.info("Please provied valid information");
          this.isButtonClicked = false;
        }
        else{
          if(this.fromval.userId == 1){
            
          this._accHeadService.saveJournal(this.fromval).subscribe((res:any)=>{
            this.showToast(res);
            if(res.status!=200){
              this.debitAmounttotal=0;
              this.isButtonClicked = false;
            }
            else{
              this.getVoucherNumber();
              this.loadddlUsers();
              this.createForm();
              this.debitAmounttotal=0;
              this.isButtonClicked = false;
            }
            })
          }else{
            
            
          this._accHeadService.saveJournalTemp(this.fromval).subscribe((res:any)=>{
            this.showToast(res);
            if(res.status!=200){
              this.debitAmounttotal=0;
              this.isButtonClicked = false;
            }
            else{
              this.getVoucherNumber();
              this.loadddlUsers();
              this.createForm();
              this.debitAmounttotal=0;
              this.isButtonClicked = false;
            }
            })
          }
        }
    }

    createForm(){
      this.purchaseForm=this._fb.group({
        narration:[,[Validators.required]],
          voucherNumber:[''],
          voucherType:['PurchaseReturnVoucher'], 
          userId: 1,
          partyId:[0,[]], 
          createdDate:[this.datePipeString], 
          multipleDebitEntry:this._fb.array([
           this.addPurchaseDebit()
          ]),
          multipleCreaditEntry:this._fb.array([
            this.addPurchaseCredit()
           ]),
           multipleItemEntry:this._fb.array([
            this.addItem()
           ]),
      })
    }

    addPurchaseCredit():FormGroup{
      return this._fb.group({
        creaditAccLedgerName:[''],
        creaditLedgerId:[0],
        creaditSubLedgerId:[0],
        creaditLedgerCode:[''],
        creaditSubLedgerCode:[''],
        creaditUniqId:[,[Validators.required]],
        amount:[0,[Validators.required]],
        creaditbalance:[null],
        toName:[null],
      })
    }


    addPurchaseDebit():FormGroup{
      return this._fb.group({
          debitAccLedgerName:[''],
          debitLedgerId:[0],
          debitSubLedgerId:[0],
          debitLedgerCode:[''],
          debitSubLedgerCode:[''],
          debitUniqId:[1,[Validators.required]], 
          amount:[0,[Validators.required]],
          debitbalance:[null],
          fromName:[null]
      })
    }

    addItem():FormGroup{
      return this._fb.group({
          accLedgerName:[''],
          ledgerId:[0],
          subLedgerId:[0],
          quantity:[0],
          itemPrice:[0],
          totalPrice:[0],
          costPrice:[0],
          itemSubLedgerCode:[''],
          itemLedgerCode:[''],
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
  
    get fromval(){
      return this.purchaseForm.value;
    }
    get g() {
      return this.purchaseForm.controls;
    }

}

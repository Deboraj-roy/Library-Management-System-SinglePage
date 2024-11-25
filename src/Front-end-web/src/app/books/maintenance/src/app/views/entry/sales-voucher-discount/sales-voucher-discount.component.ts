import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntryService } from 'src/app/services/Entry/entry.service';
import { PartyService } from 'src/app/services/Party/party.service';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { UserService } from 'src/app/services/users/user.service';
import { UsersVM } from 'src/app/models/users/UsersVM';
import { NumberFormatPipe } from 'src/app/number-format.pipe';
import { debounce } from 'rxjs';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-sales-voucher-discount',
  templateUrl: './sales-voucher-discount.component.html',
  styleUrls: ['./sales-voucher-discount.component.scss']
})
export class SalesVoucherDiscountComponent {
  public salesForm:FormGroup;
   public datePipeString:any;
   public voucher:any;
   public listOfMinorCategory:any[]=[];
   public listOfPurchase:any[]=[];  
   public listOfItem:any[]=[];
   public listOfItemDicount:any[]=[];
   public debitAmounttotal:any;
   public discountAmount:any;
   public valuee:any=1;
   public itemDetails:any;
   public remainItem:any;
   public ddlUsers:UsersVM[] = [];
   public userId:any = 1;
   public isButtonClicked: boolean = false;


  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _accHeadService: AccHeadService,
    private _entryService: EntryService,
    private _noteService: NoteService,
    private _partyService: PartyService,
    private _datePipe: DatePipe,
    private _UserService: UserService,
    private _NumberFormatPipe: NumberFormatPipe,
    
  ) {
    this.datePipeString = _datePipe.transform(Date.now(),'yyyy-MM-dd');
    }

    ngOnInit(): void {
      this.getInventoryItemByMajorCategoryId();
      this.getMinorCategoryByMajorCategoryId();
      this.getVoucherNumber();
      this.getDebitValue();
      this.loadddlUsers();
      this.createForm();
    }

    numberFormat(number: number): string {
      return this._NumberFormatPipe.transform(number);
    }
  
    getVoucherNumber(){
      let type='SalesVoucher';
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
      let id=93;
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
        (<FormArray>this.salesForm.get('multipleItemEntry')).push(this.addItem());
    }
    removeItem(i:any){
      (<FormArray>this.salesForm.get('multipleItemEntry')).removeAt(i);
      this.getAmount();
    }

    getItemDetails(item:any,i:any){
      (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).patchValue({
        accLedgerName: item.accountName,
        itemSubLedgerCode: item.subledgerCode,                                                                       
        itemLedgerCode :item.ledgerCode,
        ledgerId :item.ledgerId,
        subLedgerId :item.subledgerId,
        });
        
        let name=(item.accountName).split('(')[0];
        
        this._partyService.getItemSummary(name).subscribe((res:any)=>{
          this.itemDetails=res as any;
          this.remainItem=this.itemDetails.remainItem;
          let Idname='amounttt'+i;
          let myDiv = <HTMLElement>document.getElementById(Idname);
          myDiv.innerHTML ='Remain Item : '+this.remainItem; 
        })

        
    }

    getItemTotal(i:any){
debugger;
      let Itemtotal= (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('itemPrice').value;
      let Quentity= (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('quantity').value;
      let discount = (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('discount').value || 0;    
      let Idname='amounttt'+i;
          
          var myDiv = <HTMLInputElement>document.getElementById(Idname);
          var textBoxVal= (myDiv.innerHTML).split(' : ')[1];
          if(Number(textBoxVal)<Quentity){
            (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).patchValue({
              quantity: 0,
              totalPrice:0,
              totalDiscount:0
              });
            this._toastr.error("You have not enough Item");
            return;
          }
      debugger;
      let total=Itemtotal*Quentity;
      let totaldis =discount*Quentity;
      let netTotal = total-totaldis;
      (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).patchValue({
        totalPrice: total,
        totalDiscount:totaldis,
        netTotalPrice:netTotal
        });

    }

    // getAmount(){
    //   this.debitAmounttotal=0;
    //   this.discountAmount =0;
    //   debugger;
    //   for(var i=0;i<(<FormArray>this.salesForm.get('multipleItemEntry')).length;i++){
    //     this.debitAmounttotal += (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('totalPrice').value;
    //     this.discountAmount += (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('totalDiscount').value;
    //   }

    //   (<FormArray>this.salesForm.get('multipleCreaditEntry')).at(0).patchValue({
    //     amount: this.debitAmounttotal,
    //     });

    //     (<FormArray>this.salesForm.get('multipleDebitEntry')).at(0).patchValue({
    //       amount: this.debitAmounttotal,
    //       discountAmount:this.discountAmount,
         
    //       });
    //       console.log(this.discountAmount);
    // }

    getAmount() {
      this.debitAmounttotal = 0;
      this.discountAmount = 0;
      var TotalQty=0;
      // Calculate debit amount total and discount amount from multipleItemEntry
      for (var i = 0; i < (<FormArray>this.salesForm.get('multipleItemEntry')).length; i++) {
        this.debitAmounttotal += (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('totalPrice').value;
        this.discountAmount += (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('totalDiscount').value;
        TotalQty += (<FormArray>this.salesForm.get('multipleItemEntry')).at(i).get('quantity').value;
      }
    
      const addDiscountValue = this.salesForm.get('discountEntry').get('addDiscount').value;

      const totalDiscountAmount = this.discountAmount + addDiscountValue;

      const totalAmount = this.debitAmounttotal - totalDiscountAmount;
    
      console.log(TotalQty);
      
      this.salesForm.get('discountEntry').patchValue({
        discountAmount: this.discountAmount,
        totalSalesAmount: this.debitAmounttotal, 
        totalAmount: totalAmount,  
        totalItem :TotalQty
      });
    
      // Patch the calculated debit amount into the credit and debit entries
      (<FormArray>this.salesForm.get('multipleCreaditEntry')).at(0).patchValue({
        amount: this.debitAmounttotal,
      });
    
      (<FormArray>this.salesForm.get('multipleDebitEntry')).at(0).patchValue({
        amount: this.debitAmounttotal,
      });
    }
    
    

    getDebitValue(){
      let id=126;
      this._entryService.getAllAccountByMajorCategoryId(id).subscribe((res:any)=>{
        this.listOfPurchase=res as any[];
        

      //let name=(this.listOfPurchase[0].accountName).split('(')[0];
      let parts: string[] = (this.listOfPurchase[0].accountName).split("(");
      parts.pop();
      let name: string = parts.join("(");
      let SubLedgerCode=this.listOfPurchase[0].subledgerCode;
      let ledgerCode=this.listOfPurchase[0].ledgerCode;
      let lesgerId=this.listOfPurchase[0].ledgerId;
      let subLedgerId=this.listOfPurchase[0].subledgerId;
      let UniqId=this.listOfPurchase[0].id;

      (<FormArray>this.salesForm.get('multipleCreaditEntry')).at(0).patchValue({
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


    getDebitItems(items:any,i:any){ 
      let parts: string[] = (items.accountName).split("(");
      parts.pop();
      let name: string = parts.join("(");
      (<FormArray>this.salesForm.get('multipleDebitEntry')).at(i).patchValue({
        debitUniqId: items.id,
        debitLedgerId: items.ledgerId,                                                                       
        debitLedgerCode :items.ledgerCode,
        debitAccLedgerName:name,//(items.accountName).split('(')[0],     
        debitSubLedgerId:items.subledgerId,
        debitSubLedgerCode:items.subledgerCode,
        debitbalance:this.debitAmounttotal,
  
        });
    }
    
    savePurchase(){
      debugger;
      this.isButtonClicked = true;
      debugger;
      this.getDebitValue(); 
        if(this.fromval.narration==null){
          this.fromval.invalid=true;
        }
        if(this.fromval.userId==null){
          this.fromval.userId=undefined;
        }
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
          debugger;
          console.log(this.fromval);

          this._accHeadService.saleItemWithDiscount(this.fromval).subscribe((res:any)=>{
           debugger;
            this.showToast(res);
            if(res.status!=200){
              this.debitAmounttotal=0;
              this.isButtonClicked = false;
              
            }
            else{
              console.log(res)
              var voucher =res.voucher;
              this.GetReport(voucher);
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

    
    createForm() {
      this.salesForm = this._fb.group({
        narration: ['', [Validators.required]],
        voucherNumber: [''],
        voucherType: ['SalesVoucher'],
        userId: 1,
        partyId: [0, []],
        createdDate: [this.datePipeString],
        multipleDebitEntry: this._fb.array([
          this.addPurchaseDebit()
        ]),
        multipleCreaditEntry: this._fb.array([
          this.addPurchaseCredit()
        ]),
        multipleItemEntry: this._fb.array([
          this.addItem()
        ]),
        discountEntry: this._fb.group({  // Add this line
          addDiscount: [0],
          discountAmount: [0],
          totalSalesAmount:[0],
          totalAmount:[0],
          totalItem:[0]
        }),
      });
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
          debitUniqId:[,[Validators.required]], 
          amount:[0,[Validators.required]],
          debitbalance:[null],
          fromName:[null],
          addDiscount: [0], // Add this line
          discountAmount: [0], // Add this line
      })
    }


    
    addItem(): FormGroup {
      return this._fb.group({
        accLedgerName: [''],
        itemSubLedgerCode: [''],
        itemLedgerCode: [''],
        ledgerId: [''],
        subLedgerId: [''],
        itemPrice: [0, Validators.required],
        quantity: [0, [Validators.required, Validators.min(1)]],
        discount: [0], 
        totalDiscount: [0], 
        totalPrice: [0],
        netTotalPrice:[0]
      });
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
      return this.salesForm.value;
    }
    get g() {
      return this.salesForm.controls;
    }


    GetReport(Voucher:any){
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

}

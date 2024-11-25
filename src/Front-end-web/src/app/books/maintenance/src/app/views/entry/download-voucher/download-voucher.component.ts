import { DatePipe, DecimalPipe  } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { AccLedgerImage } from 'src/app/models/Entry/VoucherImage';

@Component({
  selector: 'app-download-voucher',
  templateUrl: './download-voucher.component.html',
  styleUrls: ['./download-voucher.component.scss']
})
export class DownloadVoucherComponent {
  
  public report:any;
  public toDate:any;
  public voucher:any;
  public ddlVouchers:AccLedgerImage[] = [];
  
  public reportType: any[] = [
    { id: 'PDF', name: 'PDF' },
    { id: 'XLS', name: 'XLS' },
  ];
  
  constructor(
    private _toastr: ToastrService,
    private _datePipe: DatePipe,
    private _accHeadService: AccHeadService,
    private decimalPipe: DecimalPipe,
  ) {
    
    this.toDate = _datePipe.transform(Date.now(),'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }

  formatNumberWithCustomPattern(number: number): string {
    return this.decimalPipe.transform(number, '1.2-2');
  }

  onChanged(event: any) {
    debugger;
    if(event.term != null && event.term != ''){
      this.loadddlVouchers(event.term);
    }else {
      this.ddlVouchers = [];
    }
  }
  onVoucherChanged(event: any) {
    debugger;
    // let selectedModel = this.ddlModels.find(model => model.minorSubCategoryId === event.minorSubCategoryId);
    // if (selectedModel) {
    //   this.selectedModelNameChanged = 1;
    //   this.selectedModelName = selectedModel.minorSubCategoryName;
    // }

    if(event.voucher != null && event.voucher != ''){
      this.voucher = event.voucher;
    }else {
      this.voucher = '';
    }
  }
  loadddlVouchers(searchVoucher: string) {
    this._accHeadService.getAllddlVouchers(searchVoucher).subscribe({
      next: (result) => {
        debugger;
        this.ddlVouchers = result as AccLedgerImage[];
      },
      error: (response) => {
        console.log(response);
      },
    });
  }


  getVoucherReport(){
    debugger;
    if(this.voucher != '' && this.voucher != undefined && this.voucher != null){
      
    this._accHeadService.getVoucherReport(this.voucher).subscribe((res:any)=>{
      // let fileName=res.headers.get('content-disposition')?.split(';')[1].split('=')[1];  
      // let blob:Blob=res.body as Blob;
      // let a=document.createElement('a');
      // a.download=fileName;
      // a.href=window.URL.createObjectURL(blob);
      // a.click();

      let blob:Blob=res.body as Blob;
     let url=window.URL.createObjectURL(blob);
     window.open(url); 

    })
    }
  }


}

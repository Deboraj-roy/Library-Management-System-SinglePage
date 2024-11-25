import { Component, ElementRef, ViewChild } from '@angular/core';
import { AccHead } from 'src/app/models/acc-heads/AccHead';
import { AccSubHead } from 'src/app/models/acc-heads/AccSubHead';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { UserService } from 'src/app/services/users/user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AccSubHeadCategory } from 'src/app/models/acc-heads/AccSubHeadCategory';
import { MajorCategory } from 'src/app/models/acc-heads/MajorCategory';
import { MinorCategory } from 'src/app/models/acc-heads/MinorCategory';
import { MinorSubCategory } from 'src/app/models/acc-heads/MinorSubCategory';
import html2canvas from 'html2canvas';

import { Ca } from 'src/app/models/reporting/Ca';

@Component({
  selector: 'app-view-heads',
  templateUrl: './view-heads.component.html',
  styleUrls: ['./view-heads.component.scss'],
})
export class ViewHeadsComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private accHeadService: AccHeadService
  ) {}

  @ViewChild('myid', { static: true }) myid!: ElementRef<HTMLImageElement>;
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;

  chartOfAccounts: Ca[] = [];
  accHeads: AccHead[] = [];
  accSubHeads: AccSubHead[] = [];
  accSubHeadCategories: AccSubHeadCategory[] = [];
  majorCategories: MajorCategory[] = [];
  minorCategories: MinorCategory[] = [];
  minorSubCategories: MinorSubCategory[] = [];

  AccHeadId!:string;
  AccSubHeadId!:string;
  AccSubHeadCategoryId!:string;
  MajorCategoryId!:string;
  MinorCategoryId!:string;
  MinorSubCategoryId!:string;

  ngOnInit(): void {
    this.loadCa();
    this.loadAccHeads();
    this.loadAccSubHeads();
    this.loadAccSubHeadCategories();
    this.loadMajorCategories();
    this.loadMinorCategories();
    this.loadMinorSubCategories();
  } // end ng onInt

  loadAccHeads() {
    this.accHeadService.getAllAccHeads().subscribe({
      next: (result) => {
       // console.log(result);
        this.accHeads = result;

      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  loadAccSubHeads() {
    this.accHeadService.getAllAccSubHeads().subscribe({
      next: (result) => {
      //  console.log(result);
        this.accSubHeads = result;

      },
      error: (response) => {
        console.log(response);
      },
    });
  }


  loadAccSubHeadCategories(){

    this.accHeadService.getAllAccSubHeadCategories().subscribe(
      {
        next:(result)=>{
       //  console.log(result);
          this.accSubHeadCategories=result;

        },
        error: (response)=>{
          console.log(response);
        }
      }
    );
   }//loadAccSubHeadCategories

   loadMajorCategories(){

    this.accHeadService.getAllMajorCategories().subscribe(
      {
        next:(result)=>{
		//	console.log(result);
      this.majorCategories=result;

        },
        error: (response)=>{
          console.log(response);
        }
      }
    );
   }


   loadMinorCategories(){

    this.accHeadService.getAllMinorCategories().subscribe(
      {
        next:(result)=>{
		//	console.log(result);
      this.minorCategories=result;

        },
        error: (response)=>{
          console.log(response);
        }
      }
    );
   }//load minor

   loadMinorSubCategories(){

    this.accHeadService.getAllMinorSubCategories().subscribe(
      {
        next:(result)=>{
		//	console.log(result);
      this.minorSubCategories=result;


        },
        error: (response)=>{
          console.log(response);
        }
      }
    );
   }//load minor sub


  loadCa() {
    this.accHeadService.getCa().subscribe({
      next: (result) => {
        console.log(result);
        this.chartOfAccounts = result;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  changedSelection() {

    console.log(this.AccHeadId,this.AccSubHeadId,this.AccSubHeadCategoryId,this.MajorCategoryId,this.MinorCategoryId,this.MinorSubCategoryId);

    var test ={
      AccHeadId:this.AccHeadId,
      AccSubHeadId:this.AccSubHeadId,
      AccSubHeadCategoryId:this.AccSubHeadCategoryId,
      MajorCategoryId:this.MajorCategoryId,
      MinorCategoryId:this.MinorCategoryId,
      MinorSubCategoryId:this.MinorSubCategoryId

    }

    console.log(test);

    this.accHeadService.getCaByConditions(test).subscribe({
      next: (result) => {
        console.log(result);
        this.chartOfAccounts = result;
      },
      error: (response) => {
        console.log(response);
      },
    });



  }



  downloadImage() {
    debugger;
    html2canvas(this.screen.nativeElement).then((canvas) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }

  logOut() {
    this.userService.signOut();
  }


  // public captureScreen() {
  //   var data = document.getElementById("contentToConvert");
  //   html2canvas(this.myid.nativeElement).then(canvas => {
  //     // Few necessary setting options
  //     var imgWidth = 208;
  //     var pageHeight = 295;
  //     var imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     var heightLeft = imgHeight;

  //     const contentDataURL = canvas.toDataURL("image/png");
  //     let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
  //     var position = 0;
  //     pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
  //     pdf.save("MYPdf.pdf"); // Generated PDF
  //   });
  // }
} // end class

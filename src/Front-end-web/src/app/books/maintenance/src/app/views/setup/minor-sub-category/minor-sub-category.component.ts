import { Component } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-minor-sub-category',
  templateUrl: './minor-sub-category.component.html',
  styleUrls: ['./minor-sub-category.component.scss'],
})
export class MinorSubCategoryComponent {
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private userService: UserService,
    private accHeadService: AccHeadService
  ) {
    this.refreshSubscription = this.accHeadService.refresh$.subscribe(() => {
      this.shouldRefresh = true;
    });
  }


  addMinorSubCategoryForm!: FormGroup;

  majorCategories: MajorCategory[] = [];
  minorCategories: MinorCategory[] = [];
  majorCategoriesStatic: MajorCategory[] = [];
  minorCategoriesStatic: MinorCategory[] = [];
  minorSubCategories: MinorSubCategory[] = [];
  minorSubCategoriesStatic: MinorSubCategory[] = [];
  minorSubCetegoryId:any;
  minorSubCetegoryName:any;
  minorSubCetegoryCode:any;
  searchText:any;
  selectedMinorCategoryId:any;

  page:number=1;
  count:number=0;
  tableSize:number=100;
  tableSizes:any[]=[5,10,15,20];

  shouldRefresh = false;
  private refreshSubscription: Subscription;

  public subCode:number;

  ngOnInit(): void {
    this.loadMajorCategories();
    this.loadMinorCategories();
    this.loadMinorSubCategories();
    this.addMinorSubCategoryForm = this.fb.group({
      MinorCategoryId: [null, Validators.required],
      MinorSubCategoryName: ['', Validators.required],
       MinorSubCategoryCode: [this.subCode,],
    });
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }

  onTableDataChange(event:any){
   this.page=event;
   this.loadMinorSubCategories();
  }

  loadMajorCategories() {
    this.accHeadService.getAllMajorCategories().subscribe({
      next: (result) => {
        //	console.log(result);
        this.majorCategories = result;
        this.majorCategoriesStatic = result;
      },
      error: (response) => {
        console.log(response);
      },
    });
  } //load major

  loadMinorCategories() {
    this.accHeadService.getAllMinorCategories().subscribe({
      next: (result) => {
        //	console.log(result);
        this.minorCategories = result;
        this.minorCategoriesStatic = result;
      },
      error: (response) => {
        console.log(response);
      },
    });
  } //load Minor

  loadMinorSubCategories() {
    if(this.selectedMinorCategoryId > 0 && this.selectedMinorCategoryId != null){
      
      this.accHeadService
        .getAllMinorSubCategoriesByMinorCategoryId(this.selectedMinorCategoryId)
        .subscribe({
          next: (result) => {
            //console.log(result);
            this.minorSubCategories = result;
            this.minorSubCategoriesStatic = result;
            console.log(this.minorSubCategories)
            if (this.minorSubCategories.length > 0) {

              const maxCode = Math.max(...this.minorSubCategories.map(category => Number(category.minorSubCategoryCode)));
              this.subCode = maxCode + 1; // Incrementing the max value
              console.log('Max :', maxCode);
              console.log('New Code:', this.subCode);
            }
          },
          error: (response) => {
          },
        });
    }
    else{
      
    this.accHeadService.getAllMinorSubCategories().subscribe({
      next: (result) => {
        //console.log(result);
        this.minorSubCategories = result;
        this.minorSubCategoriesStatic = result;

        console.log(this.minorSubCategories)
       
        if (this.minorSubCategories.length > 0) {

          const maxCode = Math.max(...this.minorSubCategories.map(category => Number(category.minorSubCategoryCode)));
          this.subCode = maxCode + 1; // Incrementing the max value
          console.log('Max :', maxCode);
          console.log('New Code:', this.subCode);
        }
      },
      error: (response) => {
        console.log(response);
      },
    });
    }
  } //load minor sub

  editMinorSubCategory(subledger:any){
    this.minorSubCetegoryId=subledger.minorSubCategoryId;
    this.minorSubCetegoryName=subledger.minorSubCategoryName;
    this.minorSubCetegoryCode=subledger.minorSubCategoryCode;
  }
  updateMinorSubCategory(name:any,code:any){
    console.log("name:",name,"code:",code);
    this.minorSubCetegoryName=name;
    this.minorSubCetegoryCode=code;
    let accSubLedger = new MinorSubCategory();
    accSubLedger.minorSubCategoryName=this.minorSubCetegoryName;
    accSubLedger.minorSubCategoryCode=this.minorSubCetegoryCode;
    accSubLedger.minorSubCategoryId=this.minorSubCetegoryId; 
    this.accHeadService.saveMinorSubCategory(accSubLedger).subscribe({
           next: (response) => {
             this.showToast(response);
             this.loadMinorSubCategories();
           }})
  }

  deleteSubLedger(){
    this.accHeadService.deleteSubLedger(this.minorSubCetegoryId).subscribe((res:any)=>{
      this.showToast(res);
      this.loadMinorSubCategories();
    })
   }


  changedMajorCategory(eventData: any) {
    // console.log(eventData);
    if (eventData) {
      this.addMinorSubCategoryForm.controls['MinorCategoryId'].reset();
      this.accHeadService
        .getAllMinorCategoriesByMajorCategoryId(eventData)
        .subscribe({
          next: (result) => {
            this.minorCategories = result;
          },
          error: (response) => {
          },
        });
    } else {
      this.minorCategories = this.minorCategoriesStatic;
      this.minorSubCategories = this.minorSubCategoriesStatic;
      this.addMinorSubCategoryForm.reset();
    }
  } // end changedMajorCategory

  changedMinorCategory(eventData: any) {
    // console.log(eventData);
    if (eventData) {
      this.selectedMinorCategoryId = eventData;
      this.accHeadService
        .getAllMinorSubCategoriesByMinorCategoryId(eventData)
        .subscribe({
          next: (result) => {
            this.minorSubCategories = result;
          },
          error: (response) => {
          },
        });
    } else {
      this.minorSubCategories = this.minorSubCategoriesStatic;
    }
  } // end changedMajorCategory

  onAddMinorSubCategoryFormSubmit() {
    // console.log(this.addMinorSubCategoryForm.value);
    if (this.addMinorSubCategoryForm.valid) {
      this.addMinorSubCategoryForm.patchValue({
        MinorSubCategoryCode: String(this.subCode).trim(),
          //this.addMinorSubCategoryForm.value.MinorSubCategoryCode.trim(),
      });

      this.accHeadService
        .saveMinorSubCategory(this.addMinorSubCategoryForm.value)
        .subscribe({
          next: (response) => {
            // console.log(response);
            //  this.approute.navigate(['/']);
            this.changedMinorCategory(this.addMinorSubCategoryForm.value.MinorCategoryId)
            this.showToast(response);
          //  this.loadMinorSubCategories();
            this.addMinorSubCategoryForm.controls[
              'MinorSubCategoryCode'
            ].reset();
            this.addMinorSubCategoryForm.controls[
              'MinorSubCategoryName'
            ].reset();
          },
          error: (response) => {
            console.log(response);
          },
        });
    }
  } //end onAddMinorSubCategoryFormSubmit

  resetForm(appForm: FormGroup) {
    appForm.reset();
  }

  showToast(toastmsg: any) {
    if (toastmsg.status == 200) {
      this.toastr.success(toastmsg.message);
    } else if (toastmsg.status == 201) {
      this.toastr.warning(toastmsg.message);
    } else if (toastmsg.status == 202) {
      this.toastr.info(toastmsg.message);
    } else {
      this.toastr.error(toastmsg.message);
    }
  }
}

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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acc-sub-head-category',
  templateUrl: './acc-sub-head-category.component.html',
  styleUrls: ['./acc-sub-head-category.component.scss'],
})
export class AccSubHeadCategoryComponent {
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private userService: UserService,
    private accHeadService: AccHeadService,
  ) {}

  addSubHeadCategoryForm!: FormGroup;

  message:string="";
  
  accHeads: AccHead[] = [];

  accSubHeads: AccSubHead[] = [];

  accSubHeadCategories: AccSubHeadCategory[] = [];
  accSubHeadCategoriesStatic: AccSubHeadCategory[] = [];
  // accSub:AccSubHeadCategory=new AccSubHeadCategory();
  subHeadCategoryName:any;
  subHeadCategoryCode:any;
  subHeadCategoryId:any;

  ngOnInit(): void {
    
    this.loadAccSubHeadCategories();
    this.addSubHeadCategoryForm = this.fb.group({
      AccSubHeadId: [null, Validators.required],
      AccSubHeadCategoryName: ['', Validators.required],
      AccSubHeadCategoryCode: ['', Validators.required],
    });

    this.loadAccSubHeads();
  } // end ng onInt

  loadAccSubHeads() {
    this.accHeadService.getAllAccSubHeads().subscribe({
      next: (result) => {
       // console.log(result);
        this.accSubHeads = result;
      //  console.log(this.accHeads);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  changedAccSubHead(eventData: any) {
   // console.log(eventData);
    if (eventData) {
      this.accHeadService
        .getAllAccSubHeadCategoriesBySubHeadId(eventData)
        .subscribe({
          next: (result) => {
            this.accSubHeadCategories = result;
           // console.log(result);
          },
          error: (response) => {
            console.log(response);
          },
        });
    } else {
      this.accSubHeadCategories = this.accSubHeadCategoriesStatic;
    }
  }


  editSubHeadCategory(subHeadCategori:any){
   console.log("this is subcategory  subHeadCategori",subHeadCategori);
   this.subHeadCategoryName=subHeadCategori.accSubHeadCategoryName;
   this.subHeadCategoryCode=subHeadCategori.accSubHeadCategoryCode;
   this.subHeadCategoryId= subHeadCategori.accSubHeadCategoryId;
  }

  onAddSubHeadCategoryFormSubmit() {
   // console.log(this.addSubHeadCategoryForm.value);
    if (this.addSubHeadCategoryForm.valid) {

      this.addSubHeadCategoryForm.patchValue({

        AccSubHeadCategoryCode:this.addSubHeadCategoryForm.value.AccSubHeadCategoryCode.trim(),


      });
      this.accHeadService
        .saveAccHeadSubCategory(this.addSubHeadCategoryForm.value)
        .subscribe({
          next: (response) => {
           // console.log(response);
            //  this.approute.navigate(['/']);
            this.showToast(response);

            this.changedAccSubHead(this.addSubHeadCategoryForm.value.AccSubHeadId);

            this.addSubHeadCategoryForm.controls[
              'AccSubHeadCategoryName'
            ].reset();
            this.addSubHeadCategoryForm.controls[
              'AccSubHeadCategoryCode'
            ].reset();
          },
          error: (response) => {
            console.log(response);
          },
        });
    }
  }

  updateSubHeadCategory(name:any,code:any){
       this.subHeadCategoryName=name;
       this.subHeadCategoryCode=code;

       let accSub = new AccSubHeadCategory();
       accSub.accSubHeadCategoryName=this.subHeadCategoryName;
       accSub.accSubHeadCategoryCode=this.subHeadCategoryCode;
       accSub.accSubHeadCategoryId=this.subHeadCategoryId;
       console.log(accSub,"modal");
      this.accHeadService
             .saveAccHeadSubCategory(accSub).subscribe({
              next: (response) => {
                this.showToast(response);
                this.loadAccSubHeadCategories();
              }})
  }

  loadAccSubHeadCategories() {
    this.accHeadService.getAllAccSubHeadCategories().subscribe({
      next: (result) => {
        //console.log(result);
        this.accSubHeadCategories = result;
        this.accSubHeadCategoriesStatic = result;
      },
      error: (response) => {
        console.log(response);
      },
    });
  } //loadAccSubHeadCategories

  resetForm(appForm: FormGroup) {
    appForm.reset();
  }

  showToast(toastmsg:any){
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

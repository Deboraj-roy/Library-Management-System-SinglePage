import { Component } from '@angular/core';

import { AccHeadService } from '../../../services/acc-head/acc-head.service';
import { UserService } from '../../../services/users/user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AccSubHeadCategory } from '../../../models/acc-heads/AccSubHeadCategory';
import { MajorCategory } from '../../../models/acc-heads/MajorCategory';
import { ToastrService } from 'ngx-toastr';
import { convertToObject } from 'typescript/lib/tsserverlibrary';

@Component({
  selector: 'app-major-category',
  templateUrl: './major-category.component.html',
  styleUrls: ['./major-category.component.scss'],
})
export class MajorCategoryComponent {
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private userService: UserService,
    private accHeadService: AccHeadService
  ) {}

  addMajorCategoryForm!: FormGroup;
  accSubHeadCategories: AccSubHeadCategory[] = [];
  majorCategories: MajorCategory[] = [];

  ngOnInit(): void {
    this.addMajorCategoryForm = this.fb.group({
      AccSubHeadCategoryId: [null, Validators.required],
      MajorCategoryName: ['', Validators.required],
      MajorCategoryCode: ['', Validators.required],
    });

    this.loadAccSubHeadCategories();
    this.loadMajorCategories();
  }

  loadAccSubHeadCategories() {
    this.accHeadService.getAllAccSubHeadCategories().subscribe({
      next: (result) => {
        this.accSubHeadCategories = result;
      },
      error: (response) => {
        console.log(response);
      },
    });
  } //loadAccSubHeadCategories

  

  loadMajorCategories() {
    this.accHeadService.getAllMajorCategories().subscribe({
      next: (result) => {
        this.majorCategories = result;
      },
      error: (response) => {
        
      },
    });
  }

  onAddMajorCategoryFormSubmit() {
    // console.log(this.addMajorCategoryForm.value);
    if (this.addMajorCategoryForm.valid) {
      this.addMajorCategoryForm.patchValue({
        MajorCategoryCode:
          this.addMajorCategoryForm.value.MajorCategoryCode.trim(),
      });

      this.accHeadService
        .saveMajorCategory(this.addMajorCategoryForm.value)
        .subscribe({
          next: (response) => {
            // console.log(response);
            //  this.approute.navigate(['/']);
            this.changedAccSubHeadCategory(this.addMajorCategoryForm.value.AccSubHeadCategoryId);
           // console.log(this.addMajorCategoryForm.value.AccSubHeadCategoryId);
            this.showToast(response);
          //  this.loadMajorCategories();
            this.addMajorCategoryForm.controls['MajorCategoryName'].reset();
            this.addMajorCategoryForm.controls['MajorCategoryCode'].reset();
          },
          error: (response) => {
            console.log(response);
          },
        });
    }
  } //end onAddMajorCategoryFormSubmit

  changedAccSubHeadCategory(eventData: any) {
    if (eventData) {
      this.accHeadService
        .getAllMajorCategoriesByAccSubHeadCategoryId(eventData)
        .subscribe({
          next: (result) => {
            this.majorCategories = result;
            // console.log("=================");
            // console.log( this.majorCategories);
          },
          error: (response) => {
            console.log(response);
          },
        });
    } else {
      this.loadMajorCategories();
    }
  } // end changedAccSubHeadCategory

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
} // end class

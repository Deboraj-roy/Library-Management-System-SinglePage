import { Component } from '@angular/core';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { UserService } from 'src/app/services/users/user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MajorCategory } from 'src/app/models/acc-heads/MajorCategory';
import { MinorCategory } from 'src/app/models/acc-heads/MinorCategory';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/Note/note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-minor-category',
  templateUrl: './minor-category.component.html',
  styleUrls: ['./minor-category.component.scss'],
})
export class MinorCategoryComponent {
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private userService: UserService,
    private accHeadService: AccHeadService,
    private _noteService: NoteService,

  ) {}

  addMinorCategoryForm!: FormGroup;
  majorCategories: MajorCategory[] = [];
  minorCategories: MinorCategory[] = [];
  minorSubCategories: MinorCategory[] = [];
  notesList: any[] = [];
  LedgerName: any;
  LedgerCode: any;
  LedgerId: any;
  LedgerType: any;
  noteId: any;
  searchText:any;
  selectedMajorCategoryId:any;

  page:number=1;
  count:number=0;
  tableSize:number=100;
  public Code :any;

  ngOnInit(): void {
    this.loadMajorCategories();
    this.loadMinorCategories();
    this.getAllNotes();
    this.addMinorCategoryForm = this.fb.group({
      MajorCategoryId: [null, Validators.required],
      MinorCategoryName: ['', Validators.required],
       MinorCategoryCode: [this.Code,],
      noteId: [ ,],
      ledgerType: [''],
    });
  }

  onTableDataChange(event:any){
    debugger;
    this.page=event;
    this.loadMinorCategories();
   }

  getAllNotes(){
    this._noteService.getAllNote().subscribe((res:any)=>{
      this.notesList=res as any [];
    })
  }

  getType(type:any){
   console.log(type,"Here note model");
   this.LedgerType=type.noteType;
   this.noteId=type.noteId;
  }

  loadMajorCategories() {
    this.accHeadService.getAllMajorCategories().subscribe({
      next: (result) => {
        //	console.log(result);
        this.majorCategories = result;
      },
      error: (response) => {
      },
    });
  } //load major


  loadMinorCategories() {
    if(this.selectedMajorCategoryId > 0 && this.selectedMajorCategoryId != null){
      
      this.accHeadService
        .getAllMinorCategoriesByMajorCategoryId(this.selectedMajorCategoryId)
        .subscribe({
          next: (result) => {
            this.minorCategories = result;
            if (this.minorCategories.length > 0) {

              const maxCode = Math.max(...this.minorCategories.map(category => Number(category.minorCategoryCode)));
              this.Code = maxCode + 1; // Incrementing the max value
              console.log('Max minorCategoryCode:', maxCode);
              console.log('New Code:', this.Code);
            }
          },
          error: (response) => {
          },
        });
    }else{
      
    this.accHeadService.getAllMinorCategories().subscribe({
      next: (result) => {
        this.minorCategories = result;
        
        if (this.minorCategories.length > 0) {

          const maxCode = Math.max(...this.minorCategories.map(category => Number(category.minorCategoryCode)));
          this.Code = maxCode + 1; // Incrementing the max value
          console.log('Max minorCategoryCode:', maxCode);
          console.log('New Code:', this.Code);
        }
      },
      error: (response) => {
      },
    });
    }
  } //load minor

  

  changedAccSubHeadCategory(eventData: any) {
    // console.log(eventData);

    if (eventData) {
      this.accHeadService
        .getAllMajorCategoriesByAccSubHeadCategoryId(eventData)
        .subscribe({
          next: (result) => {
            this.majorCategories = result;
          },
          error: (response) => {
          },
        });
    } else {
      this.loadMinorCategories();
    }
  } // end changedAccSubHeadCategory

  changedMajorCategory(eventData: any) {
    debugger;
    if (eventData) {
      this.selectedMajorCategoryId = eventData;
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
      this.loadMinorCategories();
    }
  } // end changedMajorCategory


  editSubHeadCategory(subHeadCategori:any){
    this.LedgerName=subHeadCategori.minorCategoryName;
    this.LedgerCode=subHeadCategori.minorCategoryCode;
    this.LedgerId= subHeadCategori.minorCategoryId;
    this.noteId=subHeadCategori.noteId;
   }

   updateSubHeadCategory(name:any,code:any){
    this.LedgerName=name;
    this.LedgerCode=code;
    let accLedger = new MinorCategory();
    accLedger.minorCategoryName=this.LedgerName;
    accLedger.minorCategoryCode=this.LedgerCode;
    accLedger.minorCategoryId=this.LedgerId;
    accLedger.ledgerType=this.LedgerType;
    accLedger.noteId=this.noteId;
    this.accHeadService.saveMinorCategory(accLedger).subscribe({
           next: (response) => {
             this.showToast(response);
             this.loadMinorCategories();
           }})
   }

   deleteLedger(){
    this.accHeadService.deleteLedger(this.LedgerId).subscribe((res:any)=>{
      this.showToast(res);
      this.loadMinorCategories();
      debugger;
      this.accHeadService.triggerRefresh();
    })
   }

  onAddMinorCategoryFormSubmit() {
    if (this.addMinorCategoryForm.valid) {
      this.addMinorCategoryForm.patchValue({
        MinorCategoryCode: String(this.Code).trim(),//this.addMinorCategoryForm.value.MinorCategoryCode.trim(),
      });
      this.addMinorCategoryForm.value.ledgerType=this.LedgerType ;
      this.accHeadService
        .saveMinorCategory(this.addMinorCategoryForm.value)
        .subscribe({
          next: (response) => {
            this.changedMajorCategory(this.addMinorCategoryForm.value.MajorCategoryId);
            this.showToast(response);
            this.accHeadService.triggerRefresh();
            this.addMinorCategoryForm.controls['MinorCategoryCode'].reset();
            this.addMinorCategoryForm.controls['MinorCategoryName'].reset();
            this.addMinorCategoryForm.controls['noteId'].reset();
          },
          error: (response) => {
            console.log(response);
          },
        });
    }
  } 

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

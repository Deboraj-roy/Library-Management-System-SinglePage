import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { NoteService } from 'src/app/services/Note/note.service';
import { UserService } from 'src/app/services/users/user.service';
import { NoteDetailEntry } from 'src/app/models/Note/NoteDetailEntry';
import { NoteDetailsViewModel } from 'src/app/models/Note/NoteDetailsViewModel';

@Component({
  selector: 'app-note-details-entry',
  templateUrl: './note-details-entry.component.html',
  styleUrls: ['./note-details-entry.component.scss']
})
export class NoteDetailsEntryComponent {

  public noteDetailsEntryFrom:FormGroup;
  public noteDetails:NoteDetailEntry;
  public noteDetailsList:NoteDetailsViewModel[]=[];
  public ledgerCode:any='';
  public notesList:any[]=[];
  public minorCategories:any[]=[];


  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _noteService: NoteService,
    private _accHeadService: AccHeadService
  ){

  }

  ngOnInit(): void {
    this.create();
    this.loadMinorCategories();
    this.getAllNotes();
    this.getAllNoteDetails();
  }

  getAllNotes(){
    this._noteService.getAllNote().subscribe((res:any)=>{
      this.notesList=res as any [];
    })
  }

  loadMinorCategories() {
    this._accHeadService.getAllMinorCategories().subscribe({
      next: (result) => {
        this.minorCategories = result;
      },
      error: (response) => {
      },
    });
  } 

  getAllNoteDetails(){
    this._noteService.getAllNoteDetails().subscribe((res:any)=>{
     this.noteDetailsList= res as NoteDetailsViewModel[];
    })
  }

  saveNoteDetails(){
    debugger;
    this.noteDetailsEntryFrom.patchValue({
      ledgerCode:this.ledgerCode,
    })
    if(this.noteDetailsEntryFrom.valid){
      this.noteDetails=this.fromval;
      this._noteService.saveNoteDetails(this.noteDetails).subscribe((res:any)=>{
        this.showToast(res);
        this.create();
        this.getAllNoteDetails();
      })
    }
    else{
      this._toastr.error("Please Provide Valid Info");
    }
    
  }

  getLedgerCode(model:any){
    this.ledgerCode=model.minorCategoryCode;
  }


  create(){
    this.noteDetailsEntryFrom=this._fb.group({
      noteDetailId:[0,[]],
      ledgerCode:[,[Validators.required]],
      noteId:[,[Validators.required]],
      minorCategoryId:[,[Validators.required]]
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
    return this.noteDetailsEntryFrom.value;
  }
  get g() {
    return this.noteDetailsEntryFrom.controls;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccSubHead } from 'src/app/models/acc-heads/AccSubHead';
import { NoteEntry } from 'src/app/models/Note/NoteEntry';
import { NoteViewModel } from 'src/app/models/Note/NoteViewModel';
import { AccHeadService } from 'src/app/services/acc-head/acc-head.service';
import { UserService } from 'src/app/services/users/user.service';
import { NoteService } from 'src/app/services/Note/note.service';

@Component({
  selector: 'app-note-entry',
  templateUrl: './note-entry.component.html',
  styleUrls: ['./note-entry.component.scss']
})
export class NoteEntryComponent {

  public noteEntryFrom:FormGroup;
  public accSubHeads: AccSubHead[] = [];
  public note: NoteEntry;
  public notesList: NoteViewModel[]=[];
  public noteTypeList:any[]=[{id:1,name:"BS"},{id:2,name:"PL"}];
  public searchText:any;


  constructor(
    private _toastr: ToastrService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private _accHeadService: AccHeadService,
    private _noteService: NoteService,
  ) {}


  ngOnInit(): void {
    this.create();
    this.loadAccSubHeads();
    this.getAllNotes();
  }

  loadAccSubHeads() {
    this._accHeadService.getAllAccSubHeads().subscribe({
      next: (result) => {
        this.accSubHeads = result as AccSubHead[];
       console.log(this.accSubHeads);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  getAllNotes(){
    this._noteService.getAllNote().subscribe((res:any)=>{
      this.notesList=res as NoteViewModel [];
      console.log(this.notesList);
    })
  }
  saveNote(){
    debugger;
    console.log(this.fromval);
    if(this.noteEntryFrom.valid){
      this.note=this.fromval;
      this._noteService.saveNote(this.note).subscribe((res:any)=>{
        this.showToast(res);
        this. create();
        this.getAllNotes();
     })
    }
     else{
       this._toastr.error("Please Provide Valid Info");
     }
    
  }

  create(){
    this.noteEntryFrom=this._fb.group({
      noteId:[0,[]],
      noteName:[,[Validators.required]],
      noteCode:[,[Validators.required]],
      noteType:[,[Validators.required]],
      accSubHeadId:[,[Validators.required]]
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
    return this.noteEntryFrom.value;
  }
  get g() {
    return this.noteEntryFrom.controls;
  }
}

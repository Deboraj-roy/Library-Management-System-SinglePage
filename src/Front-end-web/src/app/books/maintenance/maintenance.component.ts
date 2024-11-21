import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'maintenance',
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  newCategory: FormGroup;
  /**
   *
   */
  constructor(fb: FormBuilder) {
    this.newCategory = fb.group({
      category: fb.control('', [Validators.required]),
      subCategory: fb.control('', [Validators.required]),
    });
  }

  addNewCategory(){
    return null;
  }

}

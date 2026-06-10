import { Component } from '@angular/core';

@Component({
    selector: 'app-form-controls',
    templateUrl: './form-controls.component.html',
    styleUrls: ['./form-controls.component.scss'],
    standalone: false
})
export class FormControlsComponent {

  public favoriteColor = '#26ab3c';

  constructor() { }

}

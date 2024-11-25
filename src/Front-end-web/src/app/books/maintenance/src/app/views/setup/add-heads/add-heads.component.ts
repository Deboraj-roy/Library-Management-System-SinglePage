import { Component } from '@angular/core';


@Component({
  selector: 'app-add-heads',
  templateUrl: './add-heads.component.html',
  styleUrls: ['./add-heads.component.scss']
})


export class AddHeadsComponent {

  public loder:number;


  ngOnInit(): void {
    // this.onclickLoader(0);
  }

  onclickLoader(evn:any,numb:any){
   this.loder=numb;
  }




}

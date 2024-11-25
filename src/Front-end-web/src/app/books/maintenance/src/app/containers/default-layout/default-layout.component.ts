import { Component } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems;
  position = 'top-end';
  visible = false;
  percentage = 0;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}



toggleToast() {
  this.visible = !this.visible;
}

onVisibleChange($event: boolean) {
  this.visible = $event;
  this.percentage = !this.visible ? 0 : this.percentage;
}

onTimerChange($event: number) {
  this.percentage = $event * 25;
}

}

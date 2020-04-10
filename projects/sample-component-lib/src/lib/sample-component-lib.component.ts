import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-sample-component',
  templateUrl: 'sample-component-lib.html',
  // styleUrls: ['sample-component-lib.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponentLibComponent {
  items = new Array(20);
}

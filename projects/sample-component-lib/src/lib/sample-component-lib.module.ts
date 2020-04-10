import { NgModule } from '@angular/core';
import { SampleComponentLibComponent } from './sample-component-lib.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SampleComponentLibComponent],
  imports: [CommonModule],
  exports: [SampleComponentLibComponent]
})
export class SampleComponentLibModule { }

import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SampleComponentLibModule } from 'projects/sample-component-lib'

@Component({
  selector: 'app-root',
  template: '<lib-sample-component></lib-sample-component>',
  styleUrls: ['main.scss'],
  encapsulation: ViewEncapsulation.None
})
class AppComponent {
  title = 'angular-sample-project';
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, SampleComponentLibModule]
})
class AppModule { }

// Uncomment to enable production mode
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

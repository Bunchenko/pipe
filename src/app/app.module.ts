import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CutTextPipe } from './cut-text.pipe';
import { DoubleNumbersPipe } from './double-numbers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CutTextPipe,
    DoubleNumbersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

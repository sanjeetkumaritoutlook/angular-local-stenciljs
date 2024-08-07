import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { WrapperEditorComponent } from './wrapper-editor/wrapper-editor.component';
import { FluidParentComponent } from './fluid-parent/fluid-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperEditorComponent,
    FluidParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { WrapperEditorComponent } from './wrapper-editor/wrapper-editor.component';
import { FluidParentComponent } from './fluid-parent/fluid-parent.component';
import { AppRoutingModule } from './app-routing.module';
import { LibraryComponentsComponent } from './library-components/library-components.component';
import { TestPagesComponent } from './test-pages/test-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperEditorComponent,
    FluidParentComponent,
    LibraryComponentsComponent,
    TestPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

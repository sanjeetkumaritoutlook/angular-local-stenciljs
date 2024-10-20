import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { WrapperEditorComponent } from './wrapper-editor/wrapper-editor.component';
import { FluidParentComponent } from './fluid-parent/fluid-parent.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//https://stackoverflow.com/questions/40426638/can-not-use-reactiveformsmodule
//Can't bind to 'formGroup' since it isn't a known property of 'form'.ngtsc(-998002)
//https://www.npmjs.com/package/@ckeditor/ckeditor5-angular
//https://github.com/ckeditor/ckeditor5-vue2/issues/10
//https://ckeditor.com/docs/ckeditor5/latest/getting-started/installation/angular.html#integration-with-ngmodel
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    AppComponent,
    WrapperEditorComponent,
    FluidParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule // Import CKEditorModule here
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

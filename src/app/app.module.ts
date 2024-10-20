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

//https://www.npmjs.com/package/@tinymce/tinymce-angular
//npm i @tinymce/tinymce-angular --force
import { EditorModule } from '@tinymce/tinymce-angular';


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
    EditorModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

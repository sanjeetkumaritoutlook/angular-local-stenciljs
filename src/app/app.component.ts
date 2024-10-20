import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ClassicEditor,DecoupledEditor, Essentials, Italic, Paragraph, Bold, Undo  } from 'ckeditor5';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public editorData = '<p>Hello, CKEditor 5!</p>'; // Initial content for the editor
  public editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'undo', 'redo'], // Define your toolbar options
    // Add other configuration options as needed
  };
  public Editor = DecoupledEditor;
  public config = {
      plugins: [ Bold, Essentials, Italic, Paragraph, Undo ],
      toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' ]
  }
  public onReady( editor: DecoupledEditor ): void {
      const element = editor.ui.getEditableElement()!;
      const parent = element.parentElement!;

      parent.insertBefore(
          editor.ui.view.toolbar.element!,
          element
      );
  }

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();

      console.log( data );
  }

  public onEditorChange({ editor }: any) {
    const data = editor.getData();
    console.log(data); // You can handle the data here
  }
  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
    address: new UntypedFormGroup({
      street: new UntypedFormControl(''),
      city: new UntypedFormControl(''),
      state: new UntypedFormControl(''),
      zip: new UntypedFormControl('')
    }),
    comboBox: new UntypedFormControl(''),
    rte: new UntypedFormControl(''),
  });
  
  handleComboBox(e: any) {
    console.log("combo-box",e.detail);
    
    this.profileForm.patchValue({
      comboBox: e.detail
    })
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }

  
}

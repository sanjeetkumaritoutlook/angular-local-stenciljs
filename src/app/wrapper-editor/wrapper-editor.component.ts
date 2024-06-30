import { Component ,ViewChild, ElementRef, AfterViewInit} from '@angular/core';
// Assuming `custom-rtf` is the tag name of your StencilJS component
declare global {
  interface HTMLElementTagNameMap {
    'custom-rtf': any; // Replace `any` with the type of your StencilJS component if available
  }
}
@Component({
  selector: 'app-wrapper-editor',
  templateUrl: './wrapper-editor.component.html',
  styleUrls: ['./wrapper-editor.component.scss']
})
export class WrapperEditorComponent implements AfterViewInit {
  initialvalue: string  = '<p>Hello StencilJS TinyMCE Editor!</p>';
  @ViewChild('editorComponent') editorComponent!: ElementRef;
  
  handleContentChange(event: Event) {
    const customEvent = event as CustomEvent<any>;
    console.log('Event received from StencilJS component:', customEvent.detail);
   
    // Handle content change logic here
  }
  //TinyMCE related
  editorContent: string = '<p>Initial Content</p>';
  editorConfig: any = {
    height: 300
  };
  isEditorDisabled: boolean = false;

  onEditorChange(event: Event) {
    const customEvent = event as CustomEvent<any>;
    console.log('Editor content changed:', customEvent.detail);
  }

  onEditorFocus() {
    console.log('Editor focused');
  }

  onEditorBlur() {
    console.log('Editor blurred');
  }
  constructor() { }

  // ngOnInit(): void {
  //   console.log('Component initialized'); // OnInit hook
  // }
  ngAfterViewInit() {
    // Access the StencilJS component instance and call setContent- related custom Stencil method
    const stencilComponent = this.editorComponent.nativeElement as HTMLElementTagNameMap['custom-rtf'];
   // const stencilComponent = this.editorComponent.nativeElement as HTMLElement;
    
    // Assuming you have content to set, call setContent - related custom Stencil method here
   // Check if setContent method is available and call it
   if (stencilComponent && stencilComponent.setContentInEditor) {
    const contentToSet = '<p>This is the content to set programmatically.</p>';
    stencilComponent.setContentInEditor(contentToSet);
  } else {
    console.error('setContent method is not available on the StencilJS component instance.');
  }
  }
}

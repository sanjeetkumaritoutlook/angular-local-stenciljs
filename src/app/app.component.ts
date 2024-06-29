import { Component, HostListener, EventEmitter,Output } from '@angular/core';
import { fluid } from '../main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerText: string | undefined;
  initialvalue: string  = '<p>Hello StencilJS TinyMCE Editor!</p>';
  validation = [
    {
      type: 'custom',
      validatorFn: (value: any) => {
        return value === '2023-05-23';
      },
      message: 'The value must 2023-05-23',
    },
  ];
  handleContentChange(event: Event) {
    const customEvent = event as CustomEvent<any>;
    console.log('Event received from StencilJS component:', customEvent.detail);
   
    // Handle content change logic here
  }

  @HostListener('buttonClicked', ['$event'])
  buttonClickHandler(event: any) {
    console.log(event);
    this.innerText = `Button clicked was: ${event.detail.id}`;
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
}

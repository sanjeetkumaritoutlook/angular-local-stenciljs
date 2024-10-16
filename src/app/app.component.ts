import { Component, HostListener, EventEmitter,Output } from '@angular/core';
import { fluid } from '../main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  innerText: string | undefined;
  
  validation = [
    {
      type: 'custom',
      validatorFn: (value: any) => {
        return value === '2023-05-23';
      },
      message: 'The value must 2023-05-23',
    },
  ];
  

  @HostListener('buttonClicked', ['$event'])
  buttonClickHandler(event: any) {
    console.log(event);
    this.innerText = `Button clicked was: ${event.detail.id}`;
  }

  buttonClick(e:any) {
    console.log('custom event', e)
  }
}

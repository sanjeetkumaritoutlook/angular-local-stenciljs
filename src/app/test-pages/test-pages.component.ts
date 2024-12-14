import { Component, OnInit ,HostListener, EventEmitter,Output} from '@angular/core';
import { fluid } from '../../main';

@Component({
  selector: 'app-test-pages',
  templateUrl: './test-pages.component.html',
  styleUrls: ['./test-pages.component.scss']
})
export class TestPagesComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerText: string | undefined;

  @HostListener('buttonClicked', ['$event'])
  buttonClickHandler(event: any) {
    console.log(event);
    this.innerText = `Button clicked was: ${event.detail.id}`;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-components',
  templateUrl: './library-components.component.html',
  styleUrls: ['./library-components.component.scss']
})
export class LibraryComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(e:any) {
    console.log('custom event', e)
  }
}

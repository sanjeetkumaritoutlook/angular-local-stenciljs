import { Component, OnInit } from '@angular/core';
import { formSchema } from './form-schema'; // Import schema

@Component({
  selector: 'app-library-components',
  templateUrl: './library-components.component.html',
  styleUrls: ['./library-components.component.scss']
})
export class LibraryComponentsComponent implements OnInit {
  formSchema = formSchema; // Assign the imported schema to a local variable
//first option used in html file with Angular's json pipe 
//option 2:  schemaString = JSON.stringify(formSchema); // Convert schema to JSON string
//and then in html file
//<json-schema-form [schema]="schemaString"></json-schema-form>
//

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(e:any) {
    console.log('custom event', e)
  }
}

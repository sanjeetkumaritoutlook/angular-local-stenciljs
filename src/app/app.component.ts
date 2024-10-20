import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
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

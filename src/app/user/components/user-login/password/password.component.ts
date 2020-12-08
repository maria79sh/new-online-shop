import { Component } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './password.component.html'
})
export class PasswordComponent {
    buttonPressed = false;

    onReset(){
    this.buttonPressed = true;
    // this.dialog.open(DialogElementsExampleDialog);
    }
    
}

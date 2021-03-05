import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    number: [''],
    password: [''],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {}

  onSignup() {
    this.authService
      .registerUser(
        this.form.get('number')?.value,
        this.form.get('password')?.value
      )
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
      });
  }
}

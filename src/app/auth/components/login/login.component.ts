import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    UserName: [''],
    Password: [''],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  submit() {
    this.authService
      .loginUser(
        this.form.get('UserName')?.value,
        this.form.get('Password')?.value
      )
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/store/product-list']);
        },
        (err) => {
          this._snackBar.open(err.error.error, 'danger', {
            duration: 2000,
          });
        }
      );
  }
}

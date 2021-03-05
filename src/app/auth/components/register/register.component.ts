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

    number: [""],
    password: [""],

  });
  
  constructor(private authService: AuthService , private fb : FormBuilder) {}

  ngOnInit() {
    setInterval(( )=>{
      console.log(this.form.value)
    } , 200)
  }
  
  onSignup(){
  }
}

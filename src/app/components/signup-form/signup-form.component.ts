import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm : FormGroup;
  isFormSubmitted : boolean = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'userName': this.fb.group({
        'userFirstName': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        'userLastName': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      }),
      'userEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'userPassword': ['', Validators.required],
      'userContactNumber': ['', Validators.required]
    });
  }

  get userFirstName() {
    return this.signupForm.get('userName.userFirstName');
  }

  get userLastName() {
    return this.signupForm.get('userName.userLastName');
  }

  get userEmail() {
    return this.signupForm.get('userEmail');
  }

  get userPassword() {
    return this.signupForm.get('userPassword');
  }

  get userContactNumber() {
    return this.signupForm.get('userContactNumber');
  }

  onFormSubmit() {
    this.isFormSubmitted = true;
    console.log(this.signupForm);
    console.log(this.userEmail);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginForm: FormGroup | any;
  public formSubmitted: boolean = false;

  constructor(
    public router: Router
    
  ) { }
  
  ngOnInit(): void {
    this.initFunction();
  }
  initFunction() {
    this.initForm()
  }


  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    })

  }
  public checkError = (controlastName: string, errorName: string) => {
    return this.loginForm.controls[controlastName]?.hasError(errorName)
  }
  loginbutton() {
    console.log("***")
    this.formSubmitted=true
  }
  register() {
    this.router.navigate(['home/login/register'])
  }
}

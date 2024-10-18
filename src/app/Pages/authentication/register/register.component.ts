import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
        
  constructor(
    public router:Router
  ) { }
  
  ngOnInit(): void {
    this.initFunction();
  }

  initFunction() {

  }
  admin() {
    this.router.navigate(['home/login/register/adminregister'])
  }
  parent() {
    this.router.navigate(['home/login/register/parentregister'])
  }
  student() {
    this.router.navigate(['home/login/register/studentregister'])
  }
  
}

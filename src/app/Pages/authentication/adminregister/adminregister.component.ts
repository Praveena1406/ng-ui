import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrl: './adminregister.component.css'
})
export class AdminregisterComponent {
         
  constructor(
    public router: Router
  ) { }
  
  ngOnInit(): void {
    this.initFunction();
  }

  initFunction() {

  }
  login() {
    this.router.navigate(['home/login'])
  }
}
